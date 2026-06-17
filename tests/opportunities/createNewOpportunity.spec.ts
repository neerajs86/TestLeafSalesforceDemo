import {expect} from '@playwright/test'
import {test} from "../../fixtures/loginSalesforceFixture.spec"
import { generateRandomString, currentDate } from '../../utility/commonMethods.spec';
import { fixAppLaunchLoadIssue } from '../../utility/fixAppLauncherLoadIssue.spec';

//Create Opportunities Test-case
test("Create Opportunities", async({loginSetUp, page})=>{
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
await page.waitForTimeout(2000);
//Fix load issue if it exists
fixAppLaunchLoadIssue(page);
//Click Opportunities tab
await page.locator("[data-label='Opportunities']").click();

//Click New button
await page.locator("a[title='New']").click();
//Enter Opportunity name
const opportunityName = page.locator("[name='Name']")
await opportunityName.fill("Salesforce Automation by Neeraj_" + generateRandomString(4));
//Get Opportunity Name value
const opportunityValue = await opportunityName.inputValue();

//Enter Account Name Choose Date
await page.locator("[placeholder='Search Accounts...']").click();
//Select Account Name
await page.locator("[aria-label='Recent Items'] li span").first().click();
//Select Choose Date
console.log(currentDate());
await page.locator("[name='CloseDate']").fill(currentDate());
//Select Stage Date
await page.locator("button[aria-label='Stage']").click();
await page.locator("//lightning-base-combobox-item//span[text()='Needs Analysis']").click();
//Click Save button
await page.getByTitle("Save").last().click();

//Verify Opportunity Name in Toast message and title
const toastTxt = await page.locator("[data-aura-class='forceActionsText']").innerText();
expect(toastTxt).toContain(opportunityValue);
const titleTxt = await page.locator("lightning-formatted-text[slot='primaryField']").innerText();
expect(titleTxt).toContain(opportunityValue);
});
