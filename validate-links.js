const unified = require("unified");
const visit = require("unist-util-visit");
const parse = require("remark-parse");
const stringify = require("remark-stringify");
const path = require("path");
const fs = require("fs");

// Obtain the target file
const [, , file] = process.argv;

if (!file) {
  throw new Error("Provide the target file");
}

// Obtain the markdown contents
const sourceFileResolved = path.resolve(__dirname, file);
const contents = fs.readFileSync(sourceFileResolved);

function validator() {
  return transformer;

  function transformer(tree) {
    visit(tree, "link", function (node) {
      const { url } = node;
      // Local reference
      if (/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/.test(url)) {
        const resolvedLink = path.resolve(
          path.resolve(sourceFileResolved, ".."),
          url
        );
        if (!fs.existsSync(resolvedLink)) {
          throw new Error(`Link unresolveable: ${url} - ${resolvedLink}`);
        }
      }
    });
  }
}

// Parse the AST
const tree = unified()
  .use(parse)
  .use(validator)
  .use(stringify)
  .process(contents, function (err) {
    if (err) {
      console.error(err);
    }
    process.exit(0);
  });
