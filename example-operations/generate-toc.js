const glob = require("glob");
const fs = require("fs");
const path = require("path");

const sectionWeights = {
  Itinerary: 1,
  Media: 2,
  Place: 3,
  Route: 4,
  Icon: 5,
  Profile: 6,
  Collection: 7,
};

glob("**/*.graphql", (er, files) => {
  const structures = files.map(info).reduce((c, t) => {
    return Object.assign({}, c, { [t.dir]: (c[t.dir] || []).concat(t) });
  }, {});

  const title = `
[//]: # "Title: GraphQL Examples"
[//]: # "Weight: 5"

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
    sections
      .filter((sect) => sect.parent[0] === null)
      .map((s) => {
        const sectionStart = `### ${s.title}\n\n${s.toc}`;
        const sectionMiddle = sections.reduce((c, sect) => {
          if (sect.parent[0] === s.key) {
            return c.concat(`\n\n#### ${sect.title}\n\n${sect.toc}`);
          }
          return c;
        }, []);
        const sectionDoc = [sectionStart, ...sectionMiddle].join("");
        return sectionDoc;
      })
      .join("\n\n"),
    footer,
  ].join("\n\n");
  fs.writeFileSync(path.resolve(__dirname, "./README.md"), doc);

  sections.forEach((s) => {
    let metadata = "";
    if (sectionWeights[s.title] != null) {
      metadata = `${metadata}[//]: # "Weight: ${sectionWeights[s.title]}"\n`;
    }

    const sectionStart = `${metadata}# ${s.title}\n\n${s.toc}\n\n`;
    const sectionMiddle = sections.reduce((c, sect) => {
      if (sect.parent[0] === s.key) {
        return c.concat(`## ${sect.title}\n\n${sect.toc}\n\n`);
      }
      return c;
    }, []);
    const sectionEnd = `[${s.parent[1]}](${s.parent[2]})`;
    const sectionDoc = [sectionStart, ...sectionMiddle, sectionEnd].join("");
    fs.writeFileSync(
      path.resolve(__dirname, `./${s.key}/README.md`),
      sectionDoc
    );
  });
});

function section(key, structures) {
  const [parent, parentText, parentLink] = (() => {
    const first = structures[key][0];
    const isParentDifferent = first.dirParent !== first.dir;
    if (!isParentDifferent) {
      return [null, "View other operation examples", "/example-operations"];
    }
    return [
      first.dirParent,
      `View other ${first.dirParent} operation examples`,
      `/example-operations/${first.dirParent}`,
    ];
  })();

  // Links
  return {
    key: key,
    title: formatString(key),
    toc: structures[key]
      .map((p) => `- **[${p.title}](${p.link})**\n  ${p.comment.trim()}`)
      .join("\n"),
    parent: [parent, parentText, parentLink],
  };
}

function info(input) {
  // Split out title
  const [dir, file] = rsplit(input);

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
    dirParent: dir[0],
    dir: dir.join("/"),
    title,
    path: input,
    comment,
    link,
  };
}

function formatString(string) {
  switch (string.toLowerCase()) {
    case "place/atdw":
      return "Place Provider: Australian Tourism Data Warehouse";
    default:
      break;
  }
  return string.split("/").map(upperCaseFirst).join(" ");
}

function upperCaseFirst(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function rsplit(input) {
  const split = input.split("/");
  return [split.slice(0, -1), split.slice(-1)[0]];
}
