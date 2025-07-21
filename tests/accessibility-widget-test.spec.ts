import {expect, test} from "@playwright/test";
import {MainPage} from "../src/pages/main-page";
import {ExpectedHelper} from "../src/helpers/expected-helper";

test('Check that accessibility widget has default values', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    await mainPage.accessibilityWidget.widgetButton.click();
    await mainPage.accessibilityWidget.closeButton.waitFor({state: 'visible'});
    await expect(mainPage.accessibilityWidget.togglersDivs).toHaveCount(8);
});

test('Check that link highlighing is working', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    const beforeImg = await mainPage.page.screenshot();

    await mainPage.accessibilityWidget.widgetButton.click();
    await mainPage.accessibilityWidget.closeButton.waitFor({state: 'visible'});
    await mainPage.accessibilityWidget.highlightLinksCheckbox.click();
    await mainPage.accessibilityWidget.closeButton.click();
    await mainPage.accessibilityWidget.closeButton.waitFor({state: 'hidden'});

    const afterImg = await mainPage.page.screenshot();

    await ExpectedHelper.expectedScreenshotsAreDifferent(beforeImg, afterImg);
})