const Page=require('../pageobjects/page') 

class LoginPage extends Page {
    get UserName() { return $('#email')}
    get UserPass() { return $('#password')}
    get SubmitBtn() { return $('input[type="submit"]') }
    get Errors() {return $('#valid-mail')}
    get ErrorsUser() { return $('#valid-mail') }
    get ErrorsPass() { return $('#valid-pass') }

    open () {
        return super.open('login');
    }
    
    submit() {
        this.SubmitBtn.click();
    }
}

module.exports = new LoginPage();
