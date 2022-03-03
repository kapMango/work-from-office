import DBConnection from "../common/db.js";
import dateTime from 'node-datetime'

let db = new DBConnection().conn.promise();

export default class UserModel{


    async insertUser(req){
      
        const rows = await db.query('INSERT INTO `users`(`username`,`email`,`password`,`firstname`,`lastname`,`team_id`,`bd_notification`,`role`,`created_at`,`share_birthday`,`member_id`)VALUES(?,?,?,?,?,?,?,?,?,?,?)', [
            req.body.username,
            req.body.email,
            req.body.password,
            req.body.firstname,
            req.body.lastname,
            req.body.team_id,
            req.body.bd_notification,
            req.body.role,
            dateTime.create().format('Y-m-d H:M:S'),
            req.body.share_birthday,
            req.body.member_id,

        ]);
     
        return rows;
        
    }
    async insertUserDetails(req, user_id){
        const rows = await db.query('INSERT INTO `user_details`(`user_id`,`street`,`city`,`country`,`house_number`,`phone`,`birthday`,`zip_code`,`platz`,`sharebirthday`,`bd_notification`,`more_info`)VALUES(?,?,?,?,?,?,?,?,?,?,?,?)', [
            user_id,
            req.body.street,
            req.body.city,
            req.body.country,
            req.body.house_number,
            req.body.phone,
            req.body.birthday,
            req.body.zip_code,
            req.body.platz,
            req.body.sharebirthday,
            req.body.bd_notification,
            req.body.more_info,
        ]);
      
        return rows;
    }
    async checkEmailExists(req) {   
        const rows = await db.query("SELECT email from `users` WHERE email=?", req.body.email);
        return rows[0][0];
    }

  
    async getUserByUserId(id) {
        const rows = await db.query(`SELECT users.id,users.username as username,users.email from users WHERE users.id = ?`, id);
        console.log('rows-', rows[0][0]);
        return rows[0];
    }

    async login(req) {
        const rows = await db.query("SELECT * from users WHERE email = ? ", [
            req.body.email,
           
        ]);
        return rows[0];
    }

  
}