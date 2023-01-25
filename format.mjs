import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import remark from "remark";
import remove from "unist-util-remove";
import visit from "unist-util-visit";
import lz from "lz-string";
import prettier from "remark-prettier";
import toc from "remark-toc";
import consistent from "remark-preset-lint-consistent";
import recommended from "remark-preset-lint-recommended";

const [, , fileReference] = process.argv;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studio = `https://studio.apollographql.com/sandbox/explorer`;
// const endpoint = `https://withalpaca.com/api/graphql?accessToken=UPDATE_TOKEN`;

function removeExisting() {
  return (tree) => {
    remove(tree, (node) => {
      const [first] = node.children || [];
      if (first && /^Sandbox:/.test(first.value)) {
        return true;
      }

      return false;
    });
  };
}

function link(doc) {
  const explorerURLState = lz.compressToEncodedURIComponent(
    JSON.stringify({ document: doc })
  );

  return `${studio}?explorerURLState=${explorerURLState}`;
}

function debug() {
  return (tree) => {
    visit(tree, "link", (node) => {
      console.log(node);
    });
  };
}

function addLink() {
  return (tree) => {
    tree.children = tree.children.flatMap((child) => {
      if (child.type === "code" && child.lang === "graphql") {
        return [
          child,
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                value: "Sandbox: ",
              },
              {
                type: "link",
                title: null,
                url: "/topics/graphql/Apollo%20Sandbox/",
                children: [
                  {
                    type: "text",
                    value: "Setup",
                  },
                ],
              },
              {
                type: "text",
                value: " ",
              },
              {
                type: "link",
                title: null,
                url: link(child.value),
                children: [
                  {
                    type: "text",
                    value: "View Operation",
                  },
                ],
              },
            ],
          },
        ];
      }
      return [child];
    });
  };
}

main();

async function main() {
  const ref = path.resolve(__dirname, fileReference);

  const file = await remark()
    .use(removeExisting)
    .use(addLink)
    .use(consistent)
    .use(recommended)
    .use(toc)
    .use(prettier)
    // .use(debug)
    .process(fs.readFileSync(ref, "utf8"));

  fs.writeFileSync(ref, file.toString("utf8"));
}
