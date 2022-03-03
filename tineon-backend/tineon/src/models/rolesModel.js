import DBConnection from "../common/db.js";
import dateTime from 'node-datetime'

let db = new DBConnection().conn.promise()

export default class rolesModel{

    async insertRoles(req){
      
        const rows = await db.query('INSERT INTO `role`(`role_name`,`created_at`,`updated_at`)VALUES(?,?,?)', [
            req.body.role_name,
            dateTime.create().format('Y-m-d H:M:S'),
            dateTime.create().format('Y-m-d H:M:S'),
        ]);
     
        return rows;
    }

    async getRolesList(req) { 
        const rows = await db.query("SELECT * FROM `role` LIMIT "+ req.query.limit+" OFFSET "+(req.query.page - 1) * req.query.limit);
        return rows[0];
    }


    async deleteRole(req) {
        const rows = await db.query("DELETE FROM `role` WHERE `id`=?", [req.body.role_id]);
        return rows[0];
    }


    async updateRole(req) {
        const rows = await db.query("UPDATE role SET role_name = ?, updated_at = ? WHERE id = ?", [
            req.body.role_name,
            dateTime.create().format('Y-m-d H:M:S'),
            req.body.role_id
        ]);
        return rows[0];
    }
} 