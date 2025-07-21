import {BaseElement} from "../base-classes/base-element";
import {Locator, Page} from "@playwright/test";

export class AccessibilityWidgetElement extends BaseElement {
    readonly widgetButton: Locator;
    readonly togglersDivs: Locator;
    readonly settingsCheckboxes: Locator;
    readonly highlightLinksCheckbox: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {
        super(page);

        this.widgetButton = page.locator('#acwp-toolbar-btn');
        this.togglersDivs = page.locator('.acwp-switcher');
        this.settingsCheckboxes = page.locator('input[type=\'checkbox\']');
        this.highlightLinksCheckbox = page.locator('.acwp-toggler-underline');
        this.closeButton = page.locator('#acwp-close-toolbar');
    }
}