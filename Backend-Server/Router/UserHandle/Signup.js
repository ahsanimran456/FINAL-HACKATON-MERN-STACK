import express from "express";
import {
    stringToHash,
    varifyHash,
    validateHash
} from "bcrypt-inzi"
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken';
import multer from 'multer';
const SECRET_KEY = "secret"
import { Users } from "../Models/Models";

function Signup(req, res) {
    console.log("req.body: ", JSON.parse(req.body.myDetails));
    const body = req.body
    console.log(body)
    console.log("req.files: ", req.files);
    console.log("uploaded file name: ", req.files[0].originalname);
    console.log("file type: ", req.files[0].mimetype);
    console.log("file name in server folders: ", req.files[0].filename);
    console.log("file path in server folders: ", req.files[0].path);
    let passwordValidation = /^[a-zA-Z0-9]{6,16}$/;
    let namevalid = /^[A-Za-z .]{3,40}$/
    // let eamilvalid = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
    let phonevalid = /^[0-9]{11}$/

    if ((namevalid.test(body.fullname)) && (body.email) && (phonevalid.test(body.phone)) && (passwordValidation.test(body.password))) {
        Users.findOne({ email: body.email }, async (err, user) => {
            if (!err) {
                // ........when user exits .....//
                if (user) {
                    console.log("user exist is db ")
                    res.send({ message: "Email is already in use" })
                }
                // ........when user does not exits .....//
                else {
                    Bucket.upload(
                        req.files[0].path,
                        {
                            destination: `UserProfile/${req.files[0].filename}`, // give destination name if you want to give a certain name to file in bucket, include date to make name unique otherwise it will replace previous file with the same name
                        },
                        function (err, file, apiResponse) {
                            if (!err) {
                                file.getSignedUrl({
                                    action: 'read',
                                    expires: '03-09-2491'
                                }).then(async (urlData, err) => {
                                    if (!err) {
                                        console.log("public downloadable url: ", urlData[0]) // this is public downloadable url 
                                        try {
                                            fs.unlinkSync(req.files[0].path)
                                            //file removed
                                        } catch (err) {
                                            console.error(err)
                                        }
                                        // convert password into hash //
                                        stringToHash(body.password).then(async (password) => {
                                            console.log("hash: ", password);

                                            // jwt sign token 

                                            let Token = jwt.sign({
                                                name: body.email,
                                                email: user.email,
                                            }, SECRET_KEY);
                                            console.log("token", Token)

                                            res.cookie("Token", Token, {
                                                maxAge: 86_400_000,
                                                httpOnly: true
                                            })
                                            try {
                                                const adduserDb = await Users.create({
                                                    fullname: body.fullname,
                                                    email: body.email,
                                                    phone: body.phone,
                                                    password: password,
                                                    ProfileUrl: urlData[0]

                                                })
                                                res.status(200).send({ message: 'Added user Successfully', data: adduserDb })
                                            }
                                            catch (err) {
                                                console.log(err);
                                                res.send({ message: 'Server Error' })
                                            }
                                        })


                                    }
                                })
                            } else {
                                console.log("err: ", err)
                                res.status(500).send();
                            }
                        });
                }
            }
        })

    } else {
        res.send({ Message: "Required parameter is missing" })
    }


}

export default Signup;