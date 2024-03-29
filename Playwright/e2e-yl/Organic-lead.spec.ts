import test, { expect, Locator, Page } from "@playwright/test";
import { VisualHelper } from "../e2e-visual/e2e-visual-helper";

let page: Page;
let helper: VisualHelper;

export let emailCount = 10027;
export const email = `lucas.pinto+0${emailCount}@youlend.com`;

test.describe.serial("Partner Dashboard Visual Regression", () => {
  //* Make sure to change environment on forEach Loop below >>

  do {
    test.beforeAll(async ({ browser }) => {

      page = await browser.newPage();
      helper = new VisualHelper(page);
      await helper.loadHomePage("signup-staging");
      await helper.delay(2000)
      await helper.closeCookiesJub()
      await helper.delay(1000)
    });

    test.beforeEach(async ({ }) => {
      helper = new VisualHelper(page);
    });

    test(" 01 - Signup Page", async ({ }) => {
      expect(page.url()).toContain(`/signup`);
      await page.locator('input[name="name"]').fill("Lucas");
      await page.locator('input[name="tel"]').fill("07503056563");
      await page.locator('input[name="email"]').fill(email);
      await page.locator('input[name="password"]').fill("Password1!");
      await helper.delay(2000)
      await page.locator('body > app-root > div > div > div.main-content > app-signup > form > div.d-flex.mt-56 > button > span.mat-button-wrapper').click();
   
      //await page.click('button[type="submit"]');
      // await helper.delay(1000)
      // await helper.alreadyExist()
      await helper.delay(1000)
    });

    test(" 02 - Getting Started", async ({}) => {

      
        await helper.alreadyExist()
      

      await helper.delay(1000)
      //expect(page.url()).toContain(`/gettingstarted`);
      //await page.locator('button:has-text("Get startedarrow_forward")').click();
   
    });

    test(" 03 - Company Details", async ({  }) => {
      expect(page.url()).toContain(`/companydetails`);
      await page.locator("#mat-select-0 > div > div.mat-select-arrow-wrapper.ng-tns-c51-1").click;

      await helper.delay(1000)

     
      await expect(page.locator('#mat-option-6 > span')).toHaveText('United Kindgom');
      await expect(page.locator('#mat-option-0 > span')).toHaveText("Belgium");
      await expect(page.locator('#mat-option-1 > span')).toHaveText("Germany");
      await expect(page.locator('#mat-option-2 > span')).toHaveText("Ireland");
      await expect(page.locator('#mat-option-3 > span')).toHaveText("Netherlands");
      await expect(page.locator('#mat-option-4 > span')).toHaveText("Poland");
      await expect(page.locator('#mat-option-5 > span')).toHaveText("Spain");


      await page.locator("#mat-select-value-2").click;
      await helper.delay(1000)

      
      await expect(page.locator('#mat-option-7 > span')).toHaveText("Ltd");
      await expect(page.locator('#mat-option-8 > span')).toHaveText("PLC");
      await expect(page.locator('#mat-option-9 > span')).toHaveText("LLP");
      await expect(page.locator('#mat-option-10 > span')).toHaveText("Sole Trader");
      await expect(page.locator('#mat-option-11 > span')).toHaveText("Partnership");

      await page.locator("#mat-select-value-3 > span").click;
      await page.locator("#mat-option-10 > span").click;

      await page
        .locator('input[formcontrolname="companyName"]')
        .fill(`Test${helper.emailCountHelper}`);
      await page.locator('input[formcontrolname="businessAddress"]').fill(`w2`);
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;

      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;
    });

    test(" 04 - Personal Details", async ({ }) => {
      expect(page.url()).toContain(`/personaldetails`);

      await page.locator('input[formcontrolname="lastName"]').fill(`Pinto`);

      await page.locator('input[data-placeholder="DD"]').fill(`23`);

      await page.locator('input[data-placeholder="MM"]').fill(`12`);

      await page.locator('input[data-placeholder="YYYY"]').fill(`1985`);


      await page.locator('#address-search-0').fill(`w2`);
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span:nth-child(1)").click;
      await page.locator("#cc_c2a > ul > li:nth-child(1) > div > span.light").click;

      await page.locator("body > app-root > div > div > div.main-content > app-owners-directors > div > button > span.mat-button-wrapper > span").click;
        
    });

    test(" 05 - Financial information", async ({}) => {
        expect(page.url()).toContain(`/financialinformation`);
  
        await page.locator("#mat-checkbox-1 > label > span.mat-checkbox-inner-container").click;
        await page.locator("input[type=file]").setInputFiles("./data/May 2019- April 2020.pdf")

        await page.locator("body > app-root > div > div > div.main-content > yl-financial-information > section > div.d-flex > div > button > span.mat-button-wrapper > span").click;
        
      });



    emailCount++;
  } while (emailCount == 1100);
});
