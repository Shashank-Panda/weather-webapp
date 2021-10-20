const express = require('express');
const cors = require('cors');
require('dotenv').config();
const weather = require("./routes/weather");
const coord = require("./routes/coord");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());



app.get('/api', weather)
app.get('/coord', coord)

app.listen(PORT, () => console.log(`Server Active @ ${PORT}`));