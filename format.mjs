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
const endpoint = `https://withalpaca.com/api/graphql?accessToken=UPDATE_TOKEN`;

function removeExisting() {
  return (tree) => {
    console.log(tree);

    remove(tree, (node) => {
      const [first] = node.children || [];
      if (first && /^Link to/.test(first.value)) {
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

  return `${studio}?endpoint=${encodeURIComponent(
    endpoint
  )}&explorerURLState=${explorerURLState}`;
}

function tightenLists() {
  return (tree) => {
    visit(tree, "list", (node) => {
      node.loose = false;
    });

    visit(tree, "listItem", (node) => {
      node.loose = false;
    });
  };
}

function debug() {
  return (tree) => {
    visit(tree, "listItem", (node) => {
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
                value: "Link to ",
              },
              {
                type: "link",
                title: null,
                url: link(child.value),
                children: [
                  {
                    type: "text",
                    value: "Apollo Sandbox",
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
    // .use(addLink)
    .use(consistent)
    .use(recommended)
    .use(toc)
    .use(prettier)
    .process(fs.readFileSync(ref, "utf8"));

  fs.writeFileSync(ref, file.toString("utf8"));
}
