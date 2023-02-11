import express from "express";
import {
    stringToHash,
    varifyHash,
    validateHash
} from "bcrypt-inzi"
import cookieParser from 'cookie-parser'
import  Jwt  from 'jsonwebtoken';
import { Users } from "../Models/Models";

function Signup() {
    const body = req.body
    console.log(body)

}

export default Signup;