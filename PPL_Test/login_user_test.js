describe('Login Test Suite', () => {
    it('should login with valid credentials', async () => {
        await browser.url('http://127.0.0.1:8000/login');

        const usernameInput = await $('#email');
        const passwordInput = await $('#password');

        await usernameInput.setValue('josepnapitupulu9@gmail.com'); // Correct email
        await passwordInput.setValue('12345678');

        const loginButton = await $('input[type="submit"]');
        await loginButton.click();

        await expect(browser).toHaveUrlContaining('/');
    });
});
