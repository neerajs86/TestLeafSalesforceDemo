import {expect} from '@playwright/test'
import {test} from "../../fixtures/loginSalesforceFixture.spec"
import { fixAppLaunchLoadIssue } from '../../utility/fixAppLauncherLoadIssue.spec';
import {opportunityValue} from "./createNewOpportunity.spec";

const opportunityName = opportunityValue;

//Edit Opportunities Test-case
test("Delete Opportunities", async({loginSetUp, page})=>{
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
await page.locator("a[title='Delete']").click();
//Verify Opportunity pop-up
await expect(page.locator("text=Delete Opportunity")).toBeVisible();
//Click Delete button
await page.locator("button[title='Delete']").click();

//Verify Opportunity Name in Toast message
const toastTxt = await page.locator("[data-aura-class='forceActionsText']").innerText();
expect(toastTxt).toBe(`Opportunity "${opportunityName}" was deleted. Undo`);
});