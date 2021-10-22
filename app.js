const express = require("express");
const date = require(__dirname + "/date.js");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = ['add task'];
let workItems = []

app.get("/", (req, res) => {
    let msg = date();
    res.render('list', { listTitle: msg, task: items });
});

app.post("/", (req, res) => {
    let title = req.body.button;
    let work = req.body.task;
    if (title === "Work") {
        workItems.push(work);
        console.log(work);
        res.redirect("/work");
    }
    else {
        items.push(work);
        console.log(work);
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", task: workItems })
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});
