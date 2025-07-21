import {test} from "@playwright/test";
import {MainPage} from "../src/pages/main-page";
import {ExpectedHelper} from "../src/helpers/expected-helper";


test('Check that video on the Main Page playing automatically', async ({page}) => {
    const mainPage = new MainPage(page);

    await mainPage.open();
    // Somehow, scrolling to the video element through the screenshot function is not enough
    // So we need to scroll to something else below
    await mainPage.titlesContainer.click();

    const imgBefore = await mainPage.demoVideo.screenshot();

    await mainPage.waitForVideoPlayed();

    const imgAfter = await mainPage.demoVideo.screenshot();
    await ExpectedHelper.expectedScreenshotsAreDifferent(imgBefore, imgAfter);
})