const fs = require("fs");
const path = require("path");

fs.appendFile(
  path.join(__dirname, "HelloWorld.txt"),
  "\nThis is the second line",
  (err) => {
    if (err) console.error(err);
  }
);
