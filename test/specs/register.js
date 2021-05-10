const RegisterPage = require('../pageobjects/register.page');

describe('My Login application', () => {
    it('should register with valid user name', () => {
        RegisterPage.open();
        RegisterPage.UserName.setValue('Maria');
        RegisterPage.submit();
        browser.pause(2000);
        expect(RegisterPage.ErrorsUser).toHaveText('Short Name. Name false.')
    
    });
    
    it('should register with valid email ', () => {
        RegisterPage.open();
        RegisterPage.UserMail.setValue('rosa@gmail');
        RegisterPage.submit();
        browser.pause(2000);
        expect(RegisterPage.ErrorsMail).toHaveText('Invalid Email.')
    
    });

    it('should register with valid password', () => {
        RegisterPage.open();
        RegisterPage.UserPass.setValue('1234');
        RegisterPage.submit();
        browser.pause(2000);
        expect(RegisterPage.ErrorsPass).toHaveText('Must have character. Short Password.')
    
    });

    
    it('Redirection button work correctly', () => {
    browser.pause(2000)
    expect(RegisterPage.redirectLink).toHaveHref('http://localhost:4000/public/login.html')
    });
      


});
