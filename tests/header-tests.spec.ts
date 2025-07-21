import {test, expect, Page} from '@playwright/test';
import {ExpectedHelper} from "../src/helpers/expected-helper";
import {MainPage} from "../src/pages/main-page";
import {BasePage} from "../src/base-classes/base-page";

type PageConfig = {
    name: string,
    PageClass: new (page: Page) => BasePage
}

// Add your pages here
const dataProvider: PageConfig[] = [
    {
        name: 'Test header for the Main Page',
        PageClass: MainPage
    },
    // Just for example
    {
        name: 'Test header for the Second Main Page',
        PageClass: MainPage
    },
]


dataProvider.forEach(({name, PageClass}) => {
    test(name, async ({page}) => {
        const mainPage = new PageClass(page);
        await mainPage.open();

        await expect(mainPage.header.logo).toBeVisible();
        await ExpectedHelper.expectAllVisible(mainPage.header.navigationLinks);
        await ExpectedHelper.expectedAllHaveTexts(mainPage.header.navigationLinks,
            ['Our Solutions', 'Integrations', 'Knowledge Center', 'Case Studies', 'About'])


        // Out solution dropdown validation
        await mainPage.header.openOurSolutionDropdown();

        await expect(mainPage.header.ourSolutionDropdown.title).toHaveText('I Need Knowledge Management for My')
        await ExpectedHelper.expectAllVisible(mainPage.header.ourSolutionDropdown.buttons);
        await ExpectedHelper.expectedAllHaveTexts(mainPage.header.ourSolutionDropdown.titles,
            ['Call Center', 'Self Service', 'Onboarding & Training', 'Field Service']
        )
        await ExpectedHelper.expectedAllHaveTexts(mainPage.header.ourSolutionDropdown.descriptions,
            ['Cut call center holding times by 40%',
                'Empower your customers with 24/7 knowledge',
                'Cut onboarding and training times by up to 70%',
                'Reduce your field teams time-on-site by 60%'
            ])
        await ExpectedHelper.expectedAllHaveLinks(mainPage.header.ourSolutionDropdown.buttons, [
            'https://kmslh.com/solution-call-center/',
            'https://kmslh.com/solution-self-service/',
            'https://kmslh.com/solution-onboarding/',
            'https://kmslh.com/solution-field-service/'
        ])

        await expect(mainPage.header.getIntegrationButton())
            .toHaveAttribute('href', 'https://kmslh.com/integrations/')

        // Knowledge center dropdown validation
        await mainPage.header.openKnowledgeCenterDropdown();

        await ExpectedHelper.expectAllVisible(mainPage.header.knowledgeCenterDropdown.buttons);
        await ExpectedHelper.expectedAllHaveTexts(mainPage.header.knowledgeCenterDropdown.buttons, [
            'Blog', 'Videos', 'Events', 'News', 'Guides', 'Webinars', 'Reports', 'ROI Calculator'
        ]);
        await ExpectedHelper.expectedAllHaveLinks(mainPage.header.knowledgeCenterDropdown.buttons, [
            'https://kmslh.com/blog/',
            'https://kmslh.com/video/',
            'https://kmslh.com/events/',
            'https://kmslh.com/news/',
            'https://kmslh.com/guides/',
            'https://kmslh.com/webinar/',
            'https://kmslh.com/reports/',
            'https://kmslh.com/roi-calculator/'
        ])

        await expect(mainPage.header.getCaseStudiesButton())
            .toHaveAttribute('href', 'https://kmslh.com/case-studies/')

        // About dropdown validation
        await mainPage.header.openAboutDropdown();

        await ExpectedHelper.expectAllVisible(mainPage.header.aboutDropdown.buttons);
        await ExpectedHelper.expectedAllHaveTexts(mainPage.header.aboutDropdown.buttons, [
            'About us', 'Careers', 'Lighthouse University', 'Contact us'
        ])
        await ExpectedHelper.expectedAllHaveLinks(mainPage.header.aboutDropdown.buttons, [
            'https://kmslh.com/about-us/',
            'https://kmslh.com/careers/',
            'https://kmslh.com/kms-lighthouse-university/',
            'https://kmslh.com/contact-us/'
        ])

        // Demo button validation
        await expect(mainPage.header.bookDemoButton).toBeVisible();
        await expect(mainPage.header.bookDemoButton).toHaveText('Book a Demo')
        await expect(mainPage.header.bookDemoButton.locator('a'))
            .toHaveAttribute('href', 'https://kmslh.com/book-a-demo/')
    });
});
