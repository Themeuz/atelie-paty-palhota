import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"fuicomprarpao123.",
    database:"crud"
});

app.get("/", (req, res) =>{
    res.json("Hello World!")
});

app.get("/croche", (req,res)=>{
    const q = "SELECT * FROM croche"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
        });
});


app.post("/croche", (req, res) =>{
    const q = "INSERT INTO croche (`title`, `desc`, `style`, `image`) VALUES (?)";
    const values = [
        "title from backend",
        "desc from backend",
        "style from backend",
        "image from backend",
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Foi criado um novo post!");
    });
});

app.listen(8800, ()=> {
    console.log("API Conectada e respondendo!")
});