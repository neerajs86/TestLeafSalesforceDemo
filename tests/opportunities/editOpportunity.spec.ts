import {expect} from '@playwright/test'
import {test} from "../../fixtures/loginSalesforceFixture.spec"
import { tomorrowDate } from '../../utility/commonMethods.spec';
import { fixAppLaunchLoadIssue } from '../../utility/fixAppLauncherLoadIssue.spec';

const opportunityName = "Salesforce Automation by Neeraj_T2FZ";

//Edit Opportunities Test-case
test("Edit Opportunities", async({loginSetUp, page})=>{
//Click App Launcher icon
await page.getByTitle("App Launcher").click();
//Click View All Applications link
await page.getByLabel("View All Applications").click();
await page.waitForTimeout(2000);
//Fix load issue if it exists
fixAppLaunchLoadIssue(page);
//Click Opportunities tab
await page.locator("[data-label='Opportunities']").click();
//Enter opportunity name in Search this list...
await page.getByPlaceholder("Search this list...").fill(opportunityName);
//Press enter key
await page.keyboard.press("Enter");
//Static wait
//await page.waitForTimeout(1000);
//Click Drop-down icon
await page.locator("[data-cell-type='lstListViewRowLevelAction']").first().click();
//Click Edit link
await page.locator("a[title='Edit']").click();
//Select Choose Date
await page.locator("[name='CloseDate']").fill(tomorrowDate());
//Select Stage Date
await page.locator("button[aria-label='Stage']").click();
await page.locator("//lightning-base-combobox-item//span[text()='Perception Analysis']").click();
//Enter Description
await page.locator("[class='slds-textarea']").fill("SalesForce");
//Click Save button
await page.locator("[name='SaveEdit']").click();

//Verify Opportunity Name in Toast message and title
const toastTxt = await page.locator("[data-aura-class='forceActionsText']").innerText();
expect(toastTxt).toBe(`Opportunity "${opportunityName}" was saved.`);
});