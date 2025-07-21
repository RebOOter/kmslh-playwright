import {BasePage} from "../base-classes/base-page";
import {Page} from "@playwright/test";

export class MainPage extends BasePage {
    readonly url: string = "https://kmslh.com/";

    constructor(page: Page) {
        super(page);
    }
}