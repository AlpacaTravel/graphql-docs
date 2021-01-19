const unified = require("unified");
const visit = require("unist-util-visit");
const parse = require("remark-parse");
const stringify = require("remark-stringify");
const fs = require("fs");
const path = require("path");
const { graphql, buildClientSchema, buildASTSchema } = require("graphql");
const { validate } = require("graphql/validation");
const schema = require("./graphql.schema.json");
const { parse: parser } = require("graphql");

// Obtain the target file
const [, , file] = process.argv;

if (!file) {
  throw new Error("Provide the target file");
}
console.log(`Reviewing file: ${file}`);

const nodes = [];

// Obtain the markdown contents
const sourceFileResolved = path.resolve(__dirname, file);
const contents = fs.readFileSync(sourceFileResolved);

function validator() {
  return transformer;

  function transformer(tree) {
    visit(tree, "code", function (node, index) {
      nodes.push(node);
    });
  }
}

const graphqlSchemaObj = buildClientSchema(schema);

// Parse the AST
const tree = unified()
  .use(parse)
  .use(validator)
  .use(stringify)
  .process(contents, function (err) {
    if (err) {
      console.error(err);
    }

    Promise.all(
      nodes.map((node) => {
        return new Promise((success, fail) => {
          if (node.lang !== "graphql") {
            success();
            return;
          }
          const doc = parser(node.value);
          const errors = validate(graphqlSchemaObj, doc);
          if (errors.length) {
            // console.dir(errors, { depth: null });
            fail(
              new Error(
                `Invalid graphql encountered at ${node.position.start.line}:${
                  node.position.start.column
                }, ${errors.map((e) => e.message).join(" ")}`
              )
            );
            return;
          }
          success();
        });
      })
    )
      .then(() => process.exit(0))
      .catch((err) => {
        console.error(err);
        process.exit(255);
      });
  });
