import {BasePage} from "../base-classes/base-page";
import {Locator, Page} from "@playwright/test";

export class BookDemo extends BasePage {
    readonly url: string = "https://kmslh.com/book-a-demo/";

    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly phoneField: Locator;
    readonly jobTitleField: Locator;
    readonly countrySelect: Locator;
    readonly messageField: Locator;
    readonly submitButton: Locator;
    readonly errorMessages: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameField = page.locator('input[name=\'firstname\']');
        this.lastNameField = page.locator('input[name=\'lastname\']');
        this.emailField = page.locator('input[name=\'email\']');
        this.phoneField = page.locator('input[name=\'phone\']');
        this.jobTitleField = page.locator('input[name=\'jobtitle\']');
        this.countrySelect = page.locator('select[name=\'country\']');
        this.messageField = page.locator('textarea[name=\'message\']');
        this.submitButton = page.locator('.hs-button.primary.large');
        this.errorMessages = page.locator('.hs-error-msg.hs-main-font-element');
    }
}