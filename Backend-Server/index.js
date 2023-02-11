import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors"

const port = process.env.PORT
const MAngodb = process.env.MANGODBLINK
const app = express()

app.use(express.json());
dotenv.config()

mongoose.connect(`mongodb+srv://ahsanimran:saylanihackaton@cluster0.6s824ks.mongodb.net/FinalHackaton?retryWrites=true&w=majority`)
    .then(() => console.log("Connected !!"))
    .catch((err) => console.log("err ===>", err))