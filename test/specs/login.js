const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid user name', () => {
        LoginPage.open();
        LoginPage.UserName.setValue('rosa@gmail');
        LoginPage.submit();
        browser.pause(2000);
        expect(LoginPage.ErrorsUser).toHaveText('Invalid Email.')
    
    });

    it('should login with valid password', () => {
        LoginPage.open();
        LoginPage.UserPass.setValue('1234');
        LoginPage.submit();
        browser.pause(2000);
        expect(LoginPage.ErrorsPass).toHaveText('Must have character. Short Password.')
    
    });

    it('Redirection button work correctly', () => {
        browser.pause(2000)
        expect(RegisterPage.redirectLink).toHaveHref('http://localhost:4000/public/register.html')
        });
          
    
    
});


