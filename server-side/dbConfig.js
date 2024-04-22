import mysql from "mysql";
import {config as dotConfig} from "dotenv"

dotConfig();

const pool = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "restaurant",
    password: process.env.DB_PSWD
});

export default pool;