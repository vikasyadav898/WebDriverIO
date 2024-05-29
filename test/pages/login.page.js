class loginPage {

    get enterUserNameBox() {
        return $('#username')

    }
    get enterPassWordBox() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type="submit"]')
    }
    get loginMessage() {
        return $('#flash')
    }

    get landingPageText() {
        return $('//div[@id="flash"]')
    }
    get logoutButton() {
        return $('//i[text()=" Logout"]')
    }
    get flashMessage() {
        return $('#flash-messages')
    }

    async loginWithCorrectUser(username, password) {
        await this.enterUserNameBox.setValue(username)
        await this.enterPassWordBox.setValue(password)
        await this.loginButton.click()
    }
    
    async loginText(msg) {
        await expect(this.loginMessage).toHaveTextContaining(msg)

    }
    async clickOnLogoutButton() {
        await this.logoutButton.click()
    }
    async landingPageMessage(msg) {
        await expect(this.landingPageText).toHaveTextContaining(msg)
    }
    async isErrorDisplay()
    {
    return this.flashMessage.isDisplayed()
    }


}
module.exports = new loginPage()