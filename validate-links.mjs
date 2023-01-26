import { unified } from "unified";
import { visit } from "unist-util-visit";
import parse from "remark-parse";
import stringify from "remark-stringify";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Obtain the target file
const [, , file] = process.argv;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        const cleanUrl = url.replace(/%20/g, " ").replace(/#.+/, "");
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
