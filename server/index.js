const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getComplimentList,
    getFortuneList,
    addFortune
 } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/cList", getComplimentList);
app.get("/api/fList", getFortuneList);
app.post("/api/fList", addFortune);

app.listen(4000, () => console.log("Server running on 4000"));
