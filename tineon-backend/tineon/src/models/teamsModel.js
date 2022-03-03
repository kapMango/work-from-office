import DBConnection from "../common/db.js";
import dateTime from 'node-datetime'

let db = new DBConnection().conn.promise()

export default class teamsModel{

    async insertTeam(req){
      
        const rows = await db.query('INSERT INTO `teams`(`name`,`fullname`)VALUES(?,?)', [
            req.body.name,
            req.body.fullname,
        ]);
     
        return rows;
    }

    async getTeamsList(req) {   
        const rows = await db.query("SELECT * FROM `teams` LIMIT "+ req.query.limit+" OFFSET "+(req.query.page - 1) * req.query.limit);
        return rows[0];
    }


    async deleteTeam(req) {
        const rows = await db.query("DELETE FROM `teams` WHERE `id`=?", [req.body.team_id]);
        return rows[0];
    }


    async updateTeam(req) {
        const rows = await db.query("UPDATE role SET role_name = ?, updated_at = ? WHERE id = ?", [
            req.body.name,
            req.body.fullname,
            req.body.team_id
        ]);
        return rows[0];
    }
} 