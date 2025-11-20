const fs = require("fs");
const path = require("path");

// Move index.cjs para cli.cjs após o build
const source = path.join(__dirname, "..", "dist", "index.cjs");
const dest = path.join(__dirname, "..", "dist", "cli.cjs");

if (fs.existsSync(source)) {
  fs.renameSync(source, dest);
  console.log("✅ CLI file renamed: index.cjs -> cli.cjs");
} else {
  console.log("⚠️  index.cjs not found, skipping rename");
}
