import {expect} from '@playwright/test'
import {test} from "../../fixtures/loginSalesforceFixture.spec"
import { generateRandomString, currentDate } from '../../utility/commonMethods.spec';
import { fixAppLaunchLoadIssue } from '../../utility/fixAppLauncherLoadIssue.spec';

const validationMessage = "Complete this field.";

//Create Opportunities Test-case
test("Create Opportunities without mandatory fields", async({loginSetUp, page})=>{
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
//Select Choose Date
await page.locator("[name='CloseDate']").fill(currentDate());
//Click Save button
await page.getByTitle("Save").last().click();

//Verify 'We hit a snag pop-up
await expect(page.locator("//*[text()='We hit a snag.']")).toBeVisible();
//Close error dialog
await page.locator("//span[text()='Close error dialog']").click();
//Verify the Alert message (Complete this field) displayed for Opportunity Name, Account Name and Stage
expect(page.locator("//div[@data-name='Name' and text()='Complete this field.']")).toBeVisible();
expect(page.locator("//div[@data-help-text and text()='Complete this field.']")).toBeVisible();
expect(page.locator("//div[@role='status' and text()='Complete this field.']")).toBeVisible();
});
