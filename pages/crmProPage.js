class CRMProPage{

    get forgotPassword(){
        return $("//a[text()='Forgot Password?']");
    }

}

module.exports= new CRMProPage();