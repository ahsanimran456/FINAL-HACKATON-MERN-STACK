import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors"
import Router from "./Router/Router.js";

const Port = process.env.PORT || 50552
const MAngodb = process.env.MANGODBLINK
const app = express()
app.use(express.json());
dotenv.config()

app.use(cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true
}));

app.use("/", Router)
app.use("/", (req, res) => {
    res.send(new Date());
});

mongoose.connect(`mongodb+srv://ahsanimran:saylanihackaton@cluster0.6s824ks.mongodb.net/FinalHackaton?retryWrites=true&w=majority`)
    .then(() => console.log("Connected !!"))
    .catch((err) => console.log("err ===>", err))

app.listen(Port, () => {
    console.log(`server is running on port!${Port}`);
});   
