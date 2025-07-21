import { type Page } from '@playwright/test';
import {BaseElement} from "./base-element";
import {HeaderElement} from "../elements/header/header-element";
import {AccessibilityWidgetElement} from "../elements/accessibility-widget-element";

export class BasePage extends BaseElement {
    readonly url: string = "";
    readonly header: HeaderElement = new HeaderElement(this.page);
    readonly accessibilityWidget: AccessibilityWidgetElement = new AccessibilityWidgetElement(this.page);

    constructor(page: Page) {
        super(page);
    }

    async open() {
        await this.page.goto(this.url, {
            waitUntil: 'networkidle',
        });
    }
}