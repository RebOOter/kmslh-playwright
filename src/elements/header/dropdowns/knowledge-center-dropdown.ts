import {BaseElement} from "../../../base-classes/base-element";
import {Locator, Page} from "@playwright/test";

export class KnowledgeCenterDropdown extends BaseElement {
    readonly buttons: Locator;

    constructor(page: Page) {
        super(page);
        this.buttons = page.locator('[aria-labelledby=\'dropdown_menu-2\'] a');
    }
}