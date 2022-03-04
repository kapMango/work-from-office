
import mysql from 'mysql2';

export default class DBConnection{
    conn  = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'tineon_second_db',
        password:"",
    });
}