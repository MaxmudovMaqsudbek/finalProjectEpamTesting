const LoginPage = require('../pageobjects/login.page');


describe('Sauce Demo Login Tests', () => {

    /**
     * The ULTIMATE state management. Before every single test ('it' block),
     * this hook will tear down the old browser session and start a fresh one.
     * This guarantees 100% test isolation with zero chance of state pollution.
     */
    beforeEach(async () => {
        await browser.reloadSession();
        await LoginPage.open();
    });


    describe('UC-1 & UC-2: Invalid Login Scenarios', () => {
        it('should show "Username is required" error for empty credentials', async () => {
            await LoginPage.login('', '');
            // Using modern WebdriverIO assertions that auto-wait
            await expect(LoginPage.errorMessage).toHaveText(expect.stringMatching(/Username is required/i));
        });

        it('should show "Password is required" error when password is empty', async () => {
            await LoginPage.login('standard_user', '');
            await expect(LoginPage.errorMessage).toHaveText(expect.stringMatching(/Password is required/i));
        });
    });

    describe('UC-3: Valid Login Scenarios', () => {
        const validUsers = [
            { username: 'standard_user' },
            { username: 'problem_user' },
            { username: 'performance_glitch_user' }
        ];

        validUsers.forEach((user) => {
            it(`should successfully log in with user: ${user.username}`, async () => {
                await LoginPage.login(user.username, 'secret_sauce');
                await expect(LoginPage.appLogo).toBeDisplayed();
            });
        });
    });
});