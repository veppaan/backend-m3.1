//Hämtar in installerade paket och lägger in i variabler
const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
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
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to database: " + error);
});

//Job Schema
const JobSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Du måste skicka med företagets namn!"]
    },
    jobtitle: {
        type: String,
        required: [true, "Du måste skicka med jobbtiteln!"]
    },
    location: {
        type: String,
        required: [false]
    }
});

const Job = mongoose.model("Job", JobSchema);

//Routes
app.get("/api", async(req, res) => {
    res.json({message: "Welcome to this API"});
});

app.get("/jobs", async(req, res) =>{
    try{
        //Tar ut allt från alla jobb
        let result = await Job.find({});

        return res.json(result);
    }catch(error){
        //Fel på serversidan
        return res.status(500).json(error);
    }
});

app.post("/jobs", async(req, res) => {
    try{
        let result = await Job.create(req.body);

        res.json(result);
    }catch(error){
        //Klientfel
        return res.status(400).json(error);
    }
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});
