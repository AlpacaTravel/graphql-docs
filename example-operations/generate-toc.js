const glob = require("glob");
const fs = require("fs");
const path = require("path");

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
  const footer = `
## Contributing

If you would like to share an operation that is useful to others, please send us
a pull request with the operation created in the appropriate sub-folder. If you
need to correct a comment, please update the operations directly, and not the 
generated markdown
  `;
  const sections = Object.keys(structures).map((key) =>
    section(key, structures)
  );

  // Table of contents
  const doc = [
    title,
    sections.map((s) => `### ${s.title}\n\n${s.toc}`).join("\n\n"),
    footer,
  ].join("\n\n");
  fs.writeFileSync(path.resolve(__dirname, "./README.md"), doc);

  sections.forEach((s) => {
    const sectionDoc = `# ${s.title}\n\n${s.toc}\n\n[View other operation examples](/example-operations)`;
    fs.writeFileSync(
      path.resolve(__dirname, `./${s.key}/README.md`),
      sectionDoc
    );
  });
});

function section(key, structures) {
  // Links
  return {
    key: key,
    title: capitalizeFirstLetter(key),
    toc: structures[key]
      .map((p) => `- **[${p.title}](${p.link})**\n  ${p.comment.trim()}`)
      .join("\n"),
  };
}

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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
