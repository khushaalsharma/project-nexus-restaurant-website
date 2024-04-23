import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";

//controller functions
import {genPassword, checkPassword, checkUser, addCustomer} from "./Controllers/authFuncs.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST GET PUT DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})

//REST APIs
app.post("/auth/login", async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    
    const {email, password} = req.body;

    try{
        const isUser = await checkUser(email);
        if(isUser === "error" || isUser === "problem"){
            res.status(205).json({
                msg: "user not found"
            });
        }
        else{
            const actPassword = isUser[0].password;
            if(checkPassword(password, actPassword)){
                const cookieValue = jwt.sign(isUser[0].cust_id, process.env.LOGIN_KEY);

                res.cookie("loggedDTUser", cookieValue);
                
                res.status(200).json({
                    msg: "OK"
                });
            }
            else{
                res.status(204).json({
                    msg: "Wrong Password"
                });
            }
        }
    }
    catch(error){
        res.status(500).json(error);
    }
});

app.post("/auth/register", async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    const {name, email, password} = req.body;
    //console.log(req.body);
    try{
        const hashPassword = await genPassword(password);

        const newUser = await addCustomer(name, email, hashPassword);
        if(newUser === "error" || newUser === "problem"){
            res.status(205).json({
                msg: "error in creating account"
            });
        }
        else{

            const cookieValue = jwt.sign(newUser[0].cust_id, process.env.LOGIN_KEY);
            res.cookie("loggedDTUser", cookieValue);
            res.status(200).json({
                msg: "OK"
            });
        }
    }
    catch(error){
        res.status(500).json(error);
    }
});

app.get("/auth/check", async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    const {email} = req.body;

    try{
        const isUser = await checkUser(email);
        //console.log(isUser);
        if(isUser === "error" || isUser === "problem"){
            res.status(205).json({
                msg: "error"
            });
        }
        else if(isUser.length === 0){
            res.status(200).json({
                msg: "OK"
            });
        }
        else{
            res.status(204).json({
                msg: "userFound"
            });
        }
    }
    catch(error){
        res.status(500).json(error);
    }
});

app.listen(5000, () => {
    console.log("Server Connected");
})