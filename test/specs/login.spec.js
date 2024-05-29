const LoginPage = require('../pages/login.page')
const LoginData = require('../testdata/logindata')

describe('Login with user name and password', () => {

    it("login site with correct user name and password", async () => {
        browser.url(LoginData.url)
        await LoginPage.loginWithCorrectUser(LoginData.username, LoginData.password)
        await LoginPage.loginText(LoginData.loginmessage)
    })
    it("login site with correct user name and incorrect password", async () => {
        browser.url(LoginData.url)
        await LoginPage.loginWithCorrectUser(LoginData.username, LoginData.password1)
        await LoginPage.isErrorDisplay();
    })
    it("login site with incorrect user name and correct password", async () => {
        browser.url(LoginData.url)
        await LoginPage.loginWithCorrectUser(LoginData.username1, LoginData.password1)
        await LoginPage.isErrorDisplay();
    })
})
describe('Logout page:', () => {

    it("Verify the user logout successfully and land on login page", async () => {
        browser.url(LoginData.url)
        await LoginPage.loginWithCorrectUser(LoginData.username, LoginData.password)
        await LoginPage.loginText(LoginData.loginmessage)
        await LoginPage.clickOnLogoutButton()
        await LoginPage.landingPageMessage(LoginData.logoutmessage)
        
    })  
})