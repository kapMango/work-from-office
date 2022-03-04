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

    async insertGroupUsers(req,res,group_id){
       
        var array = JSON.parse(req.body.participants)
        let rest = array.map(({user_id, approved_status}) => ({user_id, approved_status}));

        rest.forEach(object => {
            object.group_id = group_id;
          });
       var result = rest.map(Object.values);

        let sql = 'INSERT INTO user_groups(`user_id`,`approved_status`,`group_id`) VALUES  ?';
        db.query(sql, [result], (err, results) => {
            if (err) {
              return res.send(err)
            } 
            return res.status(200).json({ message: 'ok' })
        
        })
    }

    async updateGroupUsers(req){

        console.log('test=>',req.body.participants)
        let array1 = JSON.parse(req.body.participants)
     
        array1.forEach((element, index, array) => {
            console.log(element); // 100, 200, 300
            console.log(index); // 0, 1, 2
            console.log(array); // same myArray object 3 times
        });
    }

    async getGroupsList(req) {   
        const rows = await db.query("SELECT * FROM `groups`");
        return rows[0];
    }


    async deleteGroup(req) {
        const rows = await db.query("DELETE FROM `groups` WHERE `id`=?", [req.body.group_id]);
        return rows[0];
    }


    async updateGroup(req) {
        const rows = await db.query("UPDATE groups SET name=?,description=?,image=?,created_by=?,team_id=?,approved_status=?,created_at=?,updated_at=?", [
            req.body.name,
            req.body.description,
            req.file.path,
            req.body.created_by,
            req.body.team_id,
            req.body.approved_status,
            dateTime.create().format('Y-m-d H:M:S'),
            dateTime.create().format('Y-m-d H:M:S'),
        ]);
        return rows[0];
    }
} 