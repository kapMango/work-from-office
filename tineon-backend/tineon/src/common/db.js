
import mysql from 'mysql2';

export default class DBConnection{
    conn  = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'tineon',
        password:"",
    });
}