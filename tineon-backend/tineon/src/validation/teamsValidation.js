import errMsg from '../common/response-message.js'


export default class teamsValidation{

    teamValidate(data){
        let err =  new Array();

        if(!data.name){
            err.push(errMsg.roleInsertValidation);
        }

        if(!data.fullname){
            err.push(errMsg.roleInsertValidation);
        }
       
        return err;
        
    }

}