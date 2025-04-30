//Hämtar in installerade paket och lägger in i variabler
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Skapar en app med express
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
//App kan hantera korsförfrågningar
app.use(cors());
//All inkommande data blir till json
app.use(express.json());

//Ansluter till MongoDB
mongoose.connect(process.env.MONGODB_URL){
    
}
