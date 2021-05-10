const Page=require('../pageobjects/page') 

class RegisterPage extends Page {
    get UserName() { return $('#nombre')}
    get UserMail() { return $('#email')}
    get UserPass() { return $('#password')}
    get SubmitBtn() { return $('input[type="submit"]') }
    get redirectLink() { return $('a') }

    get ErrorsUser() { return $('#valid-name') }
    get ErrorsMail() { return $('#valid-mail') }
    get ErrorsPass() { return $('#valid-pass') }

    open () {
        return super.open('register');
    }
    
    submit() {
        this.SubmitBtn.click();
    }

    
}

module.exports = new RegisterPage();
