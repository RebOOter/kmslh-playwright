import {type Locator, Page} from "@playwright/test";
import {BaseElement} from "../../base-classes/base-element";
import {OurSolutionDropdownElement} from "./dropdowns/our-solution-dropdown-element";
import {KnowledgeCenterDropdown} from "./dropdowns/knowledge-center-dropdown";
import {AboutDropdownElement} from "./dropdowns/about-dropdown-element";

export class HeaderElement extends BaseElement {
    readonly logo: Locator;
    readonly navigationLinks: Locator;
    readonly bookDemoButton: Locator;

    readonly ourSolutionDropdownLocator: Locator;
    readonly ourSolutionDropdown: OurSolutionDropdownElement;

    readonly knowledgeCenterDropdownLocator: Locator;
    readonly knowledgeCenterDropdown: KnowledgeCenterDropdown;

    readonly aboutDropdownLocator: Locator;
    readonly aboutDropdown: AboutDropdownElement;

    constructor(page: Page) {
        super(page);
        this.logo = page.locator('header img');
        this.navigationLinks = page.locator('header .header_panel__nav-list-link');
        this.bookDemoButton = page.locator('.header_panel__actions');

        this.ourSolutionDropdownLocator = page.locator('[aria-labelledby=\'dropdown_menu-0\']');
        this.ourSolutionDropdown = new OurSolutionDropdownElement(page);

        this.knowledgeCenterDropdownLocator = page.locator('[aria-labelledby=\'dropdown_menu-2\']');
        this.knowledgeCenterDropdown = new KnowledgeCenterDropdown(page);

        this.aboutDropdownLocator = page.locator('[aria-labelledby=\'dropdown_menu-4\']');
        this.aboutDropdown = new AboutDropdownElement(page);
    }

    getOurSolutionButton() {
        return this.navigationLinks.nth(0);
    }

    getIntegrationButton() {
        return this.navigationLinks.nth(1);
    }

    getKnowledgeCenterButton() {
        return this.navigationLinks.nth(2);
    }

    getCaseStudiesButton() {
        return this.navigationLinks.nth(3);
    }

    getAboutButton() {
        return this.navigationLinks.nth(4);
    }

    async openOurSolutionDropdown() {
        await this.getOurSolutionButton().click();
    }

    async openKnowledgeCenterDropdown() {
        await this.getKnowledgeCenterButton().hover();
    }

    async openAboutDropdown() {
        await this.getAboutButton().hover();
    }
}