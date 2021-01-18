const unified = require("unified");
const visit = require("unist-util-visit");
const createStream = require("unified-stream");
const parse = require("remark-parse");
const stringify = require("remark-stringify");
const shortcodes = require("remark-shortcodes");
const path = require("path");
const fs = require("fs");

// Replaces a shortcode
function attacher() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, "shortcode", function (node, index, parent) {
      if (node.identifier === "CodeBlock") {
        const { src } = node.attributes;
        const resolved = path.resolve(
          __dirname,
          "./graphql-example-operations",
          src
        );
        const contents = fs.readFileSync(resolved, "utf-8");

        parent.children.splice(index, 1, {
          type: "code",
          lang: "graphql",
          value: contents,
        });
      }
    });
  }
}

const processor = unified()
  .use(parse)
  .use(shortcodes)
  .use(attacher)
  .use(stringify);

// Parse the command input and output the markdown substituted
process.stdin.pipe(createStream(processor)).pipe(process.stdout);
