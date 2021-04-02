const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = ['add task'];

app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }
    let msg = today.toLocaleDateString("en-IN", options);
    res.render('list', { day: msg, task: items });
});

app.post("/", (req, res) => {
    let work = req.body.task;
    items.push(work);
    console.log(work);
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});
