const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

// const memos = [];
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./memo.db");


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS memos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        date TEXT
        )
    `);
});

app.get("/task", (req, res) => {
    res.json(memos);
});


app.post("/task", (req, res) => {
    const { text, date } = req.body;
    db.run(
        "INSERT INTO memos (text, date) VALUES (?, ?)",
        [text, date],
        (err) => {
            if (err) {
                return res.status(500).json({ error: err.massage});
            }
            res.json({ message: "追加成功" });
        }
    );
});







app.listen(3000, () => {
    console.log("server start");
});
