const express = require("express");
const router = express.Router();

app.use(express.json());
let cors = require("cors");
app.use(cors);

router.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/friends", (req, res) => {
    res.send({"아이유": "active"});
})
module.exports = router;