import DBConnection from "../common/db.js";
import dateTime from 'node-datetime'

let db = new DBConnection().conn.promise()

export default class groupModel{

    async insertGroup(req){
      
        const rows = await db.query('INSERT INTO `groups`(`name`,`description`,`image`,`created_by`,`team_id`,`approved_status`,`created_at`,`updated_at`)VALUES(?,?,?,?,?,?,?,?)', [
            req.body.name,
            req.body.description,
            req.file.path,
            req.body.created_by,
            req.body.team_id,
            req.body.approved_status,
            dateTime.create().format('Y-m-d H:M:S'),
            dateTime.create().format('Y-m-d H:M:S'),
        ]);

        return rows;
    }

    async insertGroupUsers(req,res){
       
        var array = JSON.parse(req.body.participants),
        result = array.map(Object.values);

        let sql = 'INSERT INTO user_groups(`user_id`,`group_id`,`approved_status`) VALUES  ?';
        db.query(sql, [result], (err, results) => {
            if (err) {
              return res.send(err)
            } 
            return res.status(200).json({ message: 'ok' })
        
          })

       
    }

    // async getTeamsList(req) {   
    //     const rows = await db.query("SELECT * FROM `teams` LIMIT "+ req.query.limit+" OFFSET "+(req.query.page - 1) * req.query.limit);
    //     return rows[0];
    // }


    async deleteGroup(req) {
        const rows = await db.query("DELETE FROM `teams` WHERE `id`=?", [req.body.team_id]);
        return rows[0];
    }


    async updateGroup(req) {
        const rows = await db.query("UPDATE role SET role_name = ?, updated_at = ? WHERE id = ?", [
            req.body.name,
            req.body.fullname,
            req.body.team_id
        ]);
        return rows[0];
    }
} 