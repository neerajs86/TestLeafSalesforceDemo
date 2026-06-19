import { Page } from "@playwright/test";

export async function fixAppLaunchLoadIssue(page : Page) {
    const spinnerL = page.locator("[class='slds-spinner_container']");
    while(await spinnerL.isVisible()) {
    // Reload and wait for network activity to settle
    await page.reload();
    //Click App Launcher icon
    await page.getByTitle("App Launcher").click();
    //Click View All Applications link
    await page.getByLabel("View All Applications").click();
    }
}