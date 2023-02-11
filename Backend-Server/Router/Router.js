import express from "express";
import Signup from "./UserHandle/Signup";

const storageConfig = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        console.log("mul-file: ", file);
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})

let  uploadmidleware = multer({ storage: storageConfig })

Router.post("/signup",uploadmidleware.any(),Signup)


const Router = express.Router();

