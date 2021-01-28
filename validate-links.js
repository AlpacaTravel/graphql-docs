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
console.log(`Reviewing file: ${file}`);

// Obtain the markdown contents
const sourceFileResolved = path.resolve(__dirname, file);
const contents = fs.readFileSync(sourceFileResolved);

function validator() {
  return transformer;

  function transformer(tree) {
    visit(tree, "link", function (node) {
      const { url } = node;
      console.log(`Validating url: ${url}`);
      // Local reference
      if (
        /^(?!www\.|(?:http|ftp|mailto)s?:(\/\/)?|[A-Za-z]:\\|\/\/).*/.test(
          url
        ) &&
        !/^#/.test(url)
      ) {
        // Clean the URL
        const cleanUrl = url.replace(/%20/g, " ");
        // Create a resolved path
        const resolvedLinkPath = (() => {
          if (/\//.test(cleanUrl)) {
            return path.resolve(__dirname, `./${cleanUrl}`);
          }
          return path.resolve(path.resolve(sourceFileResolved, ".."), cleanUrl);
        })();

        if (!fs.existsSync(resolvedLinkPath)) {
          console.error(`Link unresolveable: ${url} - ${resolvedLinkPath}`);
          process.exit(255);
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
