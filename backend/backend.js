const express = require("express");
const app = express();
const test = require("./router/test");
app.use("/api", test);
const port = 5000;
app.listen(port, () => console.log(`Listening on .. ${port}`))

app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "frontend/build/index.html"));
})



