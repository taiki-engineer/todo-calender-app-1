const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

const memos = [];


app.get("/task", (req, res) => {
    res.json(memos);
});


app.post("/task", (req, res) => {
    memos.push(req.body);
    res.json({ message: "追加成功" });
});








app.listen(3000, () => {
    console.log("server start");
});