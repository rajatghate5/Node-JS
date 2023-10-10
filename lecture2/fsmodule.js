const fs = require("fs");

fs.open("file.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("Saved!");
});

fs.writeFile("file.txt", "This is the Content", (err) => {
  if (err) throw err;
  console.log("Data Saved!");
});

fs.readFile("file.txt", (err, data) => {
  var array = data.toString().split(" ");
  console.log(data.toString());
  for (i of array) {
    console.log(i);
  }
});

fs.appendFile("file.txt", " Hello how are you", (err) => {
  if (err) throw err;
  console.log("Updated!");
});

fs.rename("file.txt", "filehandling.txt", (err) => {
  if (err) throw err;
  console.log("File Renamed");
});

fs.unlink("filehandling.txt", (err) => {
  if (err) throw err;
  console.log("File Deleted");
});

