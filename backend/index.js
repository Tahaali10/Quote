const express = require("express");
const cors=require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const quoteData=require("./data")
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.json(quoteData)
})

app.listen(PORT, console.log(`Port is running on http://localhost:${PORT}`));
