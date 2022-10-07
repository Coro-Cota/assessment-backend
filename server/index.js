const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { 
    getCompliment,
    deleteCompliment,
    createCompliment
} = require('./controller')

const PORT = 4000;

app.get("/api/compliments", getCompliment);
app.delete("/api/compliemnts", deleteCompliment);
app.post("/api/compliments", createCompliment);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

