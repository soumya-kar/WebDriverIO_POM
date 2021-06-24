class LoginPage{

    get username(){
        return $('input#username');
    }

    get password(){
        return $('input#password');
    }

    get loginButton(){
        return $('button');
    }

    get flashMessage(){
        return $('#flash');
    }

    enterUsername(text){
        this.username.setValue(text);
    }

    enterPassword(text){
        this.password.setValue(text);
    }

    clickLogin(){
        this.loginButton.click();
    }

    
    
}


module.exports= new LoginPage();