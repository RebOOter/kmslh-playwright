import { expect, Locator } from '@playwright/test';

export class ExpectedHelper {
    static async expectAllVisible(locator: Locator) {
        const count = await locator.count();
        for (let i = 0; i < count; i++) {
            await expect(locator.nth(i)).toBeVisible();
        }
    }

    static async expectedAllHaveTexts(locator: Locator, texts: string[]) {
        const count = await locator.count();
        for (let i = 0; i < count; i++) {
            await expect(locator.nth(i)).toHaveText(texts[i]);
        }
    }

    static async expectedAllHaveLinks(locator: Locator, links: string[]) {
        const count = await locator.count();
        for (let i = 0; i < count; i++) {
            await expect(locator.nth(i)).toHaveAttribute('href', links[i]);
        }
    }
}