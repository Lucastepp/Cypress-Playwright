import { test, expect } from '@playwright/test'

test.describe("Transfer Funds and Make Payments", () => {

    //login Before Each Hook
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('text=Sign in')
    })

    test("Transfer Funds", async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#transfer_funds_link')
        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '3')
        await page.type('#tf_amount', '500')
        await page.type('#tf_description', 'Test Message')
        await page.click('#btn_submit')

        const boardHeader = await page.locator('h2.board-header')
        await expect(boardHeader).toContainText('Verify')
        await page.click('#btn_submit')
        
        const message = await page.locator('div.alert.alert-success')
        await expect(message).toContainText('You successfully submitted your transaction.')
    })

})


