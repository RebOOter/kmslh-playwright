import {BaseElement} from "../../../base-classes/base-element";
import {Locator, Page} from "@playwright/test";

export class OurSolutionDropdownElement extends BaseElement {
    readonly title: Locator;
    readonly buttons: Locator;
    readonly titles: Locator;
    readonly descriptions: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('.header_panel__nav-dropdown-heading');
        this.buttons = page.locator('[aria-labelledby=\'dropdown_menu-0\'] a');
        this.titles = this.buttons.locator('strong');
        this.descriptions = this.buttons.locator('p');
    }
}