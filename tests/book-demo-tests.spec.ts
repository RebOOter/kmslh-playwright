import {expect, test} from "@playwright/test";
import {MainPage} from "../src/pages/main-page";
import {ExpectedHelper} from "../src/helpers/expected-helper";
import {BookDemo} from "../src/pages/book-demo";
import {EmailHelper} from "../src/helpers/email-helper";


test('Check that all fields are interactable', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.header.openBookDemoPage();
    const bookDemoPage = new BookDemo(page);

    await bookDemoPage.firstNameField.waitFor({state: 'visible'});

    expect(page.url()).toEqual(bookDemoPage.url);

    await bookDemoPage.firstNameField.click();
    await bookDemoPage.lastNameField.click();
    await bookDemoPage.emailField.click();
    await bookDemoPage.firstNameField.click();
    await bookDemoPage.phoneField.click();
    await bookDemoPage.jobTitleField.click();
    await bookDemoPage.countrySelect.click();
    await bookDemoPage.messageField.click();

    await ExpectedHelper.expectedAllHaveText(bookDemoPage.errorMessages,
        'Please complete this required field.')

    await bookDemoPage.firstNameField.click();
    await expect(bookDemoPage.errorMessages).toHaveCount(5);

    await bookDemoPage.lastNameField.click();
    await expect(bookDemoPage.errorMessages).toHaveCount(5);

    await bookDemoPage.emailField.click();
    await expect(bookDemoPage.errorMessages).toHaveCount(5);

    await bookDemoPage.phoneField.click();
    await expect(bookDemoPage.errorMessages).toHaveCount(5);

    await bookDemoPage.jobTitleField.click();
    await expect(bookDemoPage.errorMessages).toHaveCount(5);
})

test('Check email error message', async ({page}) => {
    const bookDemoPage = new BookDemo(page);
    await bookDemoPage.open();

    await bookDemoPage.emailField.fill('invalid email');
    await expect(bookDemoPage.errorMessages).toHaveText('Email must be formatted correctly.');
})

test('Check phone error message', async ({page}) => {
    const bookDemoPage = new BookDemo(page);
    await bookDemoPage.open();

    await bookDemoPage.phoneField.fill('invalid phone');
    await expect(bookDemoPage.errorMessages)
        .toHaveText('A valid phone number may only contain numbers, +()-. or x');
})

type BlackListedDomainsConfig = {
    domain: string
}

const blackListedDomainsDataProvider: BlackListedDomainsConfig[] = [
    { domain: "something@gmail.com" },
]

blackListedDomainsDataProvider.forEach(({domain}) => {
    test('Check blacklisted domain ' + domain, async ({page}) => {
        const bookDemoPage = new BookDemo(page);
        await bookDemoPage.open();

        await bookDemoPage.emailField.fill(domain);
        await expect(bookDemoPage.errorMessages)
            .toHaveText('Please enter a different email address. This form does not accept addresses from '
                + EmailHelper.getDomain(domain) + '.');
    })
})

test('Check positive scenario', async ({page}) => {
    const bookDemoPage = new BookDemo(page);
    await bookDemoPage.open();

    await bookDemoPage.firstNameField.fill('Anton');
    await bookDemoPage.lastNameField.fill('Malev-Lanetskii');
    await bookDemoPage.emailField.fill('rebooter8d@kmslh.com');
    await bookDemoPage.phoneField.fill('+1234567890');
    await bookDemoPage.jobTitleField.fill('QA Lead / Senior QA Automation Engineer');
    await bookDemoPage.countrySelect.selectOption('Serbia');
    await bookDemoPage.messageField.fill('Hello, I need help with something');

    await expect(bookDemoPage.errorMessages).toHaveCount(0);
})