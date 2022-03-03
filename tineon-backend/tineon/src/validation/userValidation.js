import errMsg from '../common/response-message.js'
export default class userValidation{

    userValidate(data){
        let err =  new Array();

        if(!data.username){
            err.push(errMsg.usernameError);
        }
        else if(data.username.length > 10 ){
            err.push(errMsg.usernameLengthError);
        }
        if(!data.email){
            err.push(errMsg.emailError)
        }
        if (!data.firstname) {
            err.push(errMsg.firstnameError);
        }
        if (!data.lastname) {
            err.push(errMsg.lastnameError);
        }
        if (!data.street) {
            err.push(errMsg.streetError);
        }
        if (!data.city) {
            err.push(errMsg.cityError);
        }
        if (!data.country) {
            err.push(errMsg.countryError);
        }
        if (!data.zip_code) {
            err.push(errMsg.zip_codeError);
        }
        if (!data.password) {
            err.push(errMsg.passwordError);
        }
        if(data.password.length > 10 ){
            err.push(errMsg.passwordLengthError);
        }
        return err;
        
    }


}