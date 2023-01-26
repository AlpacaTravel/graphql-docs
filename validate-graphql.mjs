import { unified } from "unified";
import { visit } from "unist-util-visit";
import parse from "remark-parse";
import stringify from "remark-stringify";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { graphql, buildClientSchema, validate } from "graphql";
import { parse as parser } from "graphql";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const schema = require("./graphql.schema.json");

// Obtain the target file
const [, , file] = process.argv;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
