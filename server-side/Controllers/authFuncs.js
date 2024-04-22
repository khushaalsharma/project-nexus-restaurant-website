import pool from "../dbConfig.js";
import bcrypt from "bcrypt";

export async function genPassword(password){
    const pswd = await bcrypt.hash(password, 12);
    return pswd;
}

export function checkPassword(inputPassword, actualPassword){
    if(bcrypt.compare(inputPassword, actualPassword)){
        return true;
    }
    else{
        return false;
    }
}

export function checkUser(email){
    return new Promise((resolve, reject) => {
        pool.query("SELECT cust_id FROM customer WHERE email = ?", [email], (err, results) => {
            if(err){
                //console.log("error in checkUser");
                reject("error");
            }
            else if(results){
                resolve(results);
            }
            else{
                reject("problem");
            }
        });
    });
}

export function addCustomer(name, email, password){
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO customer(name, email, password) VALUES(?, ?, ?);", [name, email, password], (err, results) => {
            if(err){
                //console.log("error in addCustomer:" + err);
                reject("error");
            }
            else if(results.affectedRows > 0){
                resolve(results);
            }
            else{
                reject("problem");
            }
        });
    });
}