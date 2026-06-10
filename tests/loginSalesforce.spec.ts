import {expect} from '@playwright/test'
import {test} from "../fixtures/loginSalesforceFixture.spec"

test("Login into Salesforce application", async({loginSetUp, page})=> {
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
//Click Sales tab
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