// Login Page Object
class LoginPage {
    // XPath locators
    get inputUsername() {
        return $('//input[@id="user-name"]');
    }
    
    get inputPassword() {
        return $('//input[@id="password"]');
    }
    
    get btnLogin() {
        return $('//input[@id="login-button"]');
    }
    
    get errorMessage() {
        return $('//h3[@data-test="error"]');
    }

     get appLogo() {
        return $('//div[@class="app_logo"]');
    }
    
    // Page actions
    async open() {
        await browser.url('/');
        logger.info('Opened login page');
    }
    
    async enterUsername(username) {
        await this.inputUsername.setValue(username);
        logger.info(`Entered username: ${username}`);
    }
    
    async enterPassword(password) {
        await this.inputPassword.setValue(password);
        logger.info('Entered password');
    }
    
    async clearUsername() {
        await this.inputUsername.clearValue();
        logger.info('Cleared username field');
    }
    
    async clearPassword() {
        await this.inputPassword.clearValue();
        logger.info('Cleared password field');
    }
    
    async clearInputs() {
        await this.clearUsername();
        await this.clearPassword();
        logger.info('Cleared both input fields');
    }
    
    async clickLogin() {
        await this.btnLogin.click();
        logger.info('Clicked login button');
    }
    
    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed();
        const message = await this.errorMessage.getText();
        logger.info(`Error message: ${message}`);
        return message;
    }
    
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
        logger.info(`Login attempt with username: ${username}`);
    }
}

module.exports = new LoginPage();