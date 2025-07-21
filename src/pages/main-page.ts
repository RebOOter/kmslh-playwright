import {BasePage} from "../base-classes/base-page";
import {expect, Locator, Page} from "@playwright/test";

export class MainPage extends BasePage {
    readonly url: string = "https://kmslh.com/";
    readonly demoVideo: Locator;
    readonly titlesContainer: Locator;

    constructor(page: Page) {
        super(page);
        this.demoVideo = page.locator('video.elementor-video');
        this.titlesContainer = page.locator('[data-id=\'36cbc25\']');
    }

    async waitForVideoPlayed() {
        await expect(this.demoVideo).toBeVisible();

        await this.demoVideo.page().waitForFunction(
            async (el) => {
                const video = el as unknown as HTMLVideoElement;
                // Usually it's enough to wait for 5 sec
                // But Playwright is too fast for this :)
                return video.currentTime > 15;
            },
            await this.demoVideo.elementHandles(),
            { timeout: 10000 }
        )
    }
}