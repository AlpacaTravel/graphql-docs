const fs = require("fs");
const path = require("path");
const remark = require("remark");
const remove = require("unist-util-remove");
const lz = require("lz-string");

const [, , fileReference] = process.argv;

const studio = `https://studio.apollographql.com/sandbox/explorer`;
const endpoint = `https://withalpaca.com/api/graphql?accessToken=UPDATE_TOKEN`;

function removeExisting() {
  return (tree) => {
    remove(tree, (node) => {
      const [first] = node.children || [];
      if (first && /^View/.test(first.value)) {
        return true;
      }

      return false;
    });
  };
}

function link(doc) {
  const explorerURLState = lz.compressToBase64(
    JSON.stringify({ document: doc })
  );

  return `${studio}?endpoint=${encodeURIComponent(
    endpoint
  )}&explorerURLState=${explorerURLState}`;
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
                value: "View in ",
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
  const file = await remark()
    .use(removeExisting)
    .use(addLink)
    .process(fs.readFileSync(path.resolve(__dirname, fileReference), "utf8"));

  console.log(String(file));
}
