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

    async updateSurvey(req){
      
        const rows = await db.query("UPDATE `survey` SET `title`=?,`description`=?,`survey_option`=?,`survey_type`=?,`survey_end_date`=?,`survey_view_option`=?,`survey_addtional_option`=?,`survey_notification_option`=?,`user_id`=?,`club_id`=?,`created_at`=?,`updated_at`=? WHERE id=?", [
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
            req.body.survey_id
        ]);
        return rows[0];
    }


    async insertSurveyAnswers(req,survey_id){
      
        var array = JSON.parse(req.body.survey_answer)
       
         array.forEach(object => {
            object.survey_id = survey_id;
            object.created_at =   dateTime.create().format('Y-m-d H:M:S');
            object.updated_at =   dateTime.create().format('Y-m-d H:M:S');
          });

        var result = array.map(Object.values);
        let sql = 'INSERT INTO survey_answer(`survey_answer`,`survey_id`,`created_at`,`updated_at`) VALUES  ?';
        db.query(sql, [result], (err, results) => {
            if (err) {
              return res.send(err)
            } 
            return res.status(200).json({ message: 'ok' })
        
        })
    }

    async updateSurveyAnswers(req){
      
        var array = JSON.parse(req.body.survey_answer)
       // console.log('array====>',array);
         array.forEach(object => {
            if(object.id){
               db.query("UPDATE `survey_answer` SET `survey_answer`=?,`updated_at`=? WHERE id=?", [
                    object.survey_answer,
                    dateTime.create().format('Y-m-d H:M:S'),
                    object.id
                ]);
            }else{
                db.query('INSERT INTO `survey_answer`(`survey_answer`,`survey_id`,`created_at`,`updated_at`)VALUES(?,?,?,?)', [
                    object.answer,
                    req.body.survey_id,
                    dateTime.create().format('Y-m-d H:M:S'),
                    dateTime.create().format('Y-m-d H:M:S'),
                ]);
            }
               
          });

        // var result = array.map(Object.values);
        // let sql = 'INSERT INTO survey_answer(`survey_answer`,`survey_id`,`created_at`,`updated_at`) VALUES  ?';
        // db.query(sql, [result], (err, results) => {
        //     if (err) {
        //       return res.send(err)
        //     } 
        //     return res.status(200).json({ message: 'ok' })
        
        // })
    }

    async insertSurveyTypes(req,survey_id){
      
        var array = JSON.parse(req.body.event_list)
        array.forEach(object => {
            object.survey_id = survey_id;
            object.survey_type = req.body.survey_type;
            object.created_at =   dateTime.create().format('Y-m-d H:M:S');
            object.updated_at =   dateTime.create().format('Y-m-d H:M:S');
          });

        var result = array.map(Object.values);
        let sql = 'INSERT INTO survey_type(`survey_type_id`,`survey_id`,`survey_type`,`created_at`,`updated_at`) VALUES  ?';
        db.query(sql, [result], (err, results) => {
            if (err) {
              return res.send(err)
            } 
            return res.status(200).json({ message: 'ok' })
        
        })
    }

    async insertSurveyUsers(req,survey_id){
       
        var array = JSON.parse(req.body.event_list)
        var result = array.map(Object.values).flat();
       
        let SQL = 'select user_id,approved_status,event_id from event_users where event_id in (?)';
        let [res, fields] = await db.query(SQL, [result]);
        res.forEach(object => {
            object.survey_id  = survey_id;
        });
        var result_2 = res.map(Object.values)

        let sql = 'INSERT INTO survey_users(`user_id`,`approved_status`,`survey_type_id`,`survey_id`) VALUES  ?';
        db.query(sql, [result_2], (err, results) => {
            if (err) {
              return res.send(err)
            } 
            return res.status(200).json({ message: 'ok' })
        
        })
    }


} 