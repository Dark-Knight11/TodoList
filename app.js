let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var today = new Date();
    var day = today.getDay();
    msg = "";
    switch (day) {
        case 0:
            msg = "Yay it's Sunday";
            break;
        case 1:
            msg = "It's Monday we'll have to work 🙁"
            break;
        case 2:
            msg = "It's Tuesday we'll have to work 🙁"
            break;
        case 3:
            msg = "It's Wedensday we'll have to work 🙁"
            break;
        case 4:
            msg = "It's Thursday we'll have to work 🙁"
            break;
        case 5:
            msg = "It's Friday we'll have to work 🙁"
            break;
        case 6:
            msg = "Yay it's Saturday weekend is here 🤗";
            break;
        default:
            msg = "No day, its end of the earth you dumb bitch";
            break;
    }
    res.render('list', { day: msg });
});

// app.post("/", (req, res) => {

// });

app.listen(port, () => {
    console.log("Server started on port " + port);
});