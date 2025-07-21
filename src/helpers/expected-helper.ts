import { expect, Locator } from '@playwright/test';
import pixelmatch from "pixelmatch";
import { PNG } from 'pngjs';

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

    static async expectedScreenshotsAreDifferent(
        buf1: Buffer,
        buf2: Buffer,
    ) {
        const img1 = PNG.sync.read(buf1);
        const img2 = PNG.sync.read(buf2);

        if (img1.width !== img2.width || img1.height !== img2.height) {
            throw new Error(`The sizes of the images are not the same: ${img1.width}x${img1.height} vs ${img2.width}x${img2.height}`);
        }

        const diff = new PNG({ width: img1.width, height: img1.height });

        const numDiffPixels = pixelmatch(
            img1.data,
            img2.data,
            diff.data,
            img1.width,
            img1.height,
            {
                threshold: 0.1,
            }
        );

        expect(numDiffPixels).toBeGreaterThan(0);
    }
}