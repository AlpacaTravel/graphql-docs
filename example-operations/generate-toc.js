const glob = require("glob");
const fs = require("fs");
const path = require("path");
const { parse: parser } = require("graphql");

glob("**/*.graphql", (er, files) => {
  const structures = files.map(info).reduce((c, t) => {
    return Object.assign({}, c, { [t.dir]: (c[t.dir] || []).concat(t) });
  }, {});

  const title = `
# GraphQL Example Operations

The following area provides a number of example operations to perform common
requirements of applications and sites using Alpaca Travel GraphQL API.

Each section of this area is broken up by the resource type. If you are still
new to the Alpaca Travel GraphQL API, you may want to review the initial
GraphQL Articles also located in this repository first.  
  `;
  const sections = Object.keys(structures).map((section) => {
    // Links
    const contents = structures[section].map(
      (p) => `- **[${p.title}](${p.link})**\n  ${p.comment.trim()}`
    );

    return `## ${section}\n\n${contents.join("\n")}`;
  });

  const doc = [title, sections.join("\n\n")].join("\n\n");

  fs.writeFileSync(path.resolve(__dirname, "./README.md"), doc);
});

function info(input) {
  // Split out title
  const [dir, file] = input.split("/");

  // Create a title
  const title = file
    .replace(/.graphql/, "")
    .replace(/([a-z](?=[A-Z]))/g, "$1 ");

  // Target the comments at the start of the graphql query
  const contents = fs.readFileSync(path.resolve(__dirname, input), "utf-8");
  const [pre] = contents.split(/(query|mutation) (\w+) ?{/);
  const comment = pre
    .replace(/\n/g, "")
    .replace(/# /g, " ")
    .replace(/\..+/, "");

  const link = `/example-operations/${input}`;

  return {
    dir,
    title,
    path: input,
    comment,
    link,
  };
}
