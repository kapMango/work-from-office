import DBConnection from "../common/db.js";
import dateTime from 'node-datetime'

let db = new DBConnection().conn.promise()

export default class newsModel{

    async insertNews(req){
      
        const rows = await db.query('INSERT INTO `news`(`team_id`,`title`,`headline`,`text`,`author`,`priority`,`publication_date_from`,`publication_date_to`,`imageUrls`,`attachment`,`tags`,`audience`,`approved_status`,`created_at`,`guests`,`show_guest_list`,`updated_at`)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
            req.body.team_id,
            req.body.title,
            req.body.headline,
            req.body.text,
            req.body.author,
            req.body.priority,
            req.body.publication_date_from,
            req.body.publication_date_to,
            req.body.imageUrls,
            req.body.attachment,
            req.body.tags,
            req.body.audience,
            req.body.approved_status,
            dateTime.create().format('Y-m-d H:M:S'),
            req.body.guests,
            req.body.show_guest_list,
            dateTime.create().format('Y-m-d H:M:S'),
        ]);
        	   
        return rows;
    }

    async getNewsList(req) {   
        const rows = await db.query("SELECT * FROM `news` LIMIT "+ req.query.limit+" OFFSET "+(req.query.page - 1) * req.query.limit);
        return rows[0];
    }


    async deleteNews(req) {
        const rows = await db.query("DELETE FROM `news` WHERE `id`=?", [req.body.news_id]);
        return rows[0];
    }


    async updateNews(req) {
        const rows = await db.conn.promise().query("UPDATE news SET team_id = ?,title= ?,headline= ?,text=?,author= ?,priority=?,publication_date_from=?,publication_date_to=?,imageUrls= ?,attachment= ?,imageUrls= ?,tags= ?,audience= ?,approved_status= ?,created_at= ?,guests= ?,show_guest_list= ?,updated_at= ? WHERE uid = ?", [
                req.body.team_id,
                req.body.title,
                req.body.headline,
                req.body.text,
                req.body.author,
                req.body.priority,
                req.body.publication_date_from,
                req.body.publication_date_to,
                req.body.imageUrls,
                req.body.attachment,
                req.body.tags,
                req.body.audience,
                req.body.approved_status,
                dateTime.create().format('Y-m-d H:M:S'),
                req.body.guests,
                req.body.show_guest_list,
                dateTime.create().format('Y-m-d H:M:S'),
                req.body.news_id
        ]);
        console.log('rows', rows[0]);
        return rows[0];
      
    }
} 