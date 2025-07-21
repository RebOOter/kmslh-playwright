import {BaseElement} from "../../../base-classes/base-element";
import {Locator} from "@playwright/test";

export class AboutDropdownElement extends BaseElement {
    readonly buttons: Locator;

    constructor(page: any) {
        super(page);

        this.buttons = page.locator('[aria-labelledby=\'dropdown_menu-4\'] a');
    }
}