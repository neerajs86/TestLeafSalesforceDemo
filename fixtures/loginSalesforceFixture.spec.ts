import {test as base} from '@playwright/test'

//Extend the base test and add new property

type hooksFixture = {
    loginSetUp : string
}

export const test = base.extend<hooksFixture>({
    loginSetUp : async ({page}, use) => {
    //Login steps
    await page.goto("https://login.salesforce.com");
    //Log In with Email
    await page.locator("#gidr-email-log-in-button").click();
    //Enter email
    await page.locator("[name='identifier']").fill("neerajsetiayk22@gmail.com");
    //Click Continue button
    await page.locator("//button[text()='Continue']").click();
    //Enter password
    await page.locator("[name='password']").fill("Test@654leaf");
    //Click Login button
    await page.locator("//button[text()='Log In']").click();
    await page.waitForTimeout(2000);
    }
});