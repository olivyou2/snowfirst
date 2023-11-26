const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/*", (req, res) => {
    res.send({
        body: req.body,
        param: req.params
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});