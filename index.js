import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();
//console.log(day);

let Type = "Workkkk day";
let vibe = "Dont Be a Mad Angle";

if (day === 0 || day === 6) {
    Type = "Weekend Hurrayyy";
    vibe = "Lets Play ";
 
};

app.get("/", (req,res) => {
    res.render("index.ejs", {
        dayType: Type,
        advice: vibe
    });
});

app.listen(port, () => {
    console.log(`the server is running at ${port}`);
});
