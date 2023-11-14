import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fName = req.body["fName"];
  const lName = req.body["lName"];
  
  const lenOfLet = fName.length + lName.length;
  const enteredName = fName + " " + lName;

  console.log(enteredName);

  res.render("index.ejs", { numberOfLetters: lenOfLet, yourName: enteredName });
});

// app.post("/submit", (req, res) => {
//   const enteredName = req.body["fName"] + req.body["lName"];
  
// console.log(enteredName);

//   res.render("index.ejs", { yourName: enteredName});
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
