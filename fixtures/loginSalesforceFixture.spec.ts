import {test as base, expect} from '@playwright/test'

//Extend the base test and add new property
type hooksFixture = {
    loginSetUp : string
}

export const test = base.extend<hooksFixture>({
    loginSetUp : async ({page}, use) => {
    const loginSetUp = "Login fixture";
    //Login steps
    await page.goto("https://login.salesforce.com");
    //Enter email
    await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com");
    //Enter password
    await page.getByLabel("password").fill("TestLeaf@2025");
    //Click Login button
    await page.locator("[value='Log In']").click();
    await page.waitForURL("https://testleaf.lightning.force.com/lightning/page/home");
    //Calling the test and passing the fixture value to the test
    await use(loginSetUp);
    
    //Verify Title and Url
    const title = await page.title();
    console.log("Page Title : " + title);
    expect.soft(title).toContain("Home");
    const url = page.url();
    console.log("Page Url : " + url);
    expect.soft(url).toContain("https://testleaf.lightning.force.com/lightning/page/home");
    }
});