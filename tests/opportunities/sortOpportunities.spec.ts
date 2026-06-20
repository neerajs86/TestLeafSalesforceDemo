import {expect, Locator} from '@playwright/test'
import {test} from "../../fixtures/loginSalesforceFixture.spec"
import { isAscendingOrder } from '../../utility/commonMethods.spec';
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
//Select List Display drop-down icon
await page.getByTitle("Select list display").click();
//Select Table View
await page.locator("[title='Display as table']").click();
//Click Close Date Sort icon to sort Close Date in increasing order
await page.locator("//span[@title='Close Date']").click();
await page.waitForTimeout(1000);

/****Stucked here****/
//Verify ascending order
//Closed Dates
const firstDateL = page.locator("lightning-formatted-date-time").first();
console.log(firstDateL);
const dateFT = (await firstDateL.innerText()).toString();
console.log(dateFT);
const dateObject = new Date(dateFT).getDate();
console.log(dateObject);
const lastDateL = page.locator("lightning-formatted-date-time").last()
console.log(lastDateL);
const dateLT = await lastDateL.innerText();
console.log(dateLT);

// if(dateF <= dateL) {
//     console.log("Ascending order maintained");
// }
});
