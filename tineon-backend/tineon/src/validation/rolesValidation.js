import errMsg from '../common/response-message.js'


export default class rolesValidation{

    roleValidate(data){
        let err =  new Array();

        if(!data.role_name){
            err.push(errMsg.roleInsertValidation);
        }
       
        return err;
        
    }

}