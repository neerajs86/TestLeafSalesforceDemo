import {expect} from '@playwright/test'
import {test} from "../fixtures/loginSalesforceFixture.spec"

test("Login into Salesforce application", async({loginSetUp, page})=> {
    // await page.goto("https://login.salesforce.com");
    // //Log In with Email
    // await page.locator("#gidr-email-log-in-button").click();
    // //Enter email
    // await page.locator("[name='identifier']").fill("neerajsetiayk22@gmail.com");
    // await page.locator("//button[text()='Continue']").click();
    // //Enter password
    // await page.locator("[name='password']").fill("Test@654leaf");
    // //Click Login button
    // await page.locator("//button[text()='Log In']").click();
    // await page.waitForTimeout(10000);
await page.getByTitle("App Launcher").click();
await page.getByLabel("View All Applications").click();
//await page.waitForLoadState();
await page.waitForTimeout(5000);
await page.locator("one-app-launcher-app-tile[data-name='Sales']").click();
//Click Leads tab
await page.getByTestId("Lead").click();
//Click New Leads button
await page.locator("[name='New']").click();
//Select Saluation
await page.locator("[name='salutation']").click();
await page.locator("[data-value='Mr.']").click();
//Enter last name
await page.getByPlaceholder("Last Name").fill("Kumar");
//Enter company
await page.locator("[name='Company']").fill("TestLeaf");
//Click save button
await page.locator("[name='SaveEdit']").click();
//Verify lead name
const leadnameText = await page.locator(".forceActionLink").innerText();
console.log(leadnameText);
expect(leadnameText).toContain("Kumar");
})