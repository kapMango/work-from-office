import errMsg from '../common/response-message.js'
export default class newsValidation{

    newsValidate(data){
        let err =  new Array();

        if(!data.team_id){
            err.push(errMsg.usernameError);
        }
      
        if(!data.title){
            err.push(errMsg.emailError)
        }
        if (!data.headline) {
            err.push(errMsg.firstnameError);
        }
        if (!data.text) {
            err.push(errMsg.lastnameError);
        }
        if (!data.author) {
            err.push(errMsg.streetError);
        }
        if (!data.priority) {
            err.push(errMsg.cityError);
        }
        if (!data.publication_date_from) {
            err.push(errMsg.countryError);
        }
        if (!data.publication_date_to) {
            err.push(errMsg.zip_codeError);
        }
        if (!data.imageUrls) {
            err.push(errMsg.passwordError);
        }
        if (!data.attachment) {
            err.push(errMsg.passwordError);
        }
        if (!data.tags) {
            err.push(errMsg.passwordError);
        }
        if (!data.audience) {
            err.push(errMsg.passwordError);
        }
        if (!data.approved_status) {
            err.push(errMsg.passwordError);
        }
        if (!data.guests) {
            err.push(errMsg.passwordError);
        }
        if (!data.show_guest_list) {
            err.push(errMsg.passwordError);
        }
        
        return err;
     
    }

}