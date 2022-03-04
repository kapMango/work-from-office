import DBConnection from "../common/db.js";
import dateTime from 'node-datetime'

let db = new DBConnection().conn.promise()

export default class surveyModel{

    async insertSurvey(req){
      
        const rows = await db.query('INSERT INTO `survey`(`title`,`description`,`survey_option`,`survey_type`,`survey_end_date`,`survey_view_option`,`survey_addtional_option`,`survey_notification_option`,`user_id`,`club_id`,`created_at`,`updated_at` )VALUES(?,?,?,?,?,?,?,?,?,?,?,?)', [
            req.body.title,
            req.body.description,
            req.body.survey_option,
            req.body.survey_type,
            req.body.survey_end_date,
            req.body.survey_view_option,
            req.body.survey_addtional_option,
            req.body.survey_notification_option,
            req.body.user_id,
            req.body.club_id,
            dateTime.create().format('Y-m-d H:M:S'),
            dateTime.create().format('Y-m-d H:M:S'),
        ]);
        return rows;
    }

} 