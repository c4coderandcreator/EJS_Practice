import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.render("index.ejs", {
        dayType: "a Bingo day",
        advice: "Dont Be a Mad Angle"
    });
});

app.listen(port, () => {
    console.log(`the port is running at ${port}`);
});
