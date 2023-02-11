import express from "express";
const Router = express.Router();
// import all apis funtions 
import Signup from "./UserHandle/Signup.js";

import multer from 'multer';

const storageConfig = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        console.log("mul-file: ", file);
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})

let uploadmidleware = multer({ storage: storageConfig })

Router.post("/signup", uploadmidleware.any(), Signup)



export default Router

