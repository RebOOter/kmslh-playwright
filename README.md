# KMSLH Test Automation Framework

A Playwright-based test automation framework for the KMSLH website (https://kmslh.com/). This framework follows the Page Object Model pattern and provides a structured approach to writing and maintaining automated tests.

## Project Overview

This project is a test automation framework built with Playwright and TypeScript. It is designed to test the functionality of the KMSLH website, including:

- Main page functionality
- Header navigation
- Accessibility widget
- Book Demo form
- And more...

The framework uses a Page Object Model pattern to create a maintainable and scalable test suite.

## Technology Stack

- [Playwright](https://playwright.dev/) - Browser automation library
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [pixelmatch](https://github.com/mapbox/pixelmatch) - Pixel-level image comparison library
- [pngjs](https://github.com/lukeapage/pngjs) - PNG image manipulation library

## Project Structure

```
kmslh/
├── src/                      # Source code
│   ├── base-classes/         # Base classes for pages and elements
│   │   ├── base-element.ts   # Base class for all elements
│   │   └── base-page.ts      # Base class for all pages
│   ├── elements/             # Element classes (components)
│   │   ├── header/           # Header elements
│   │   │   ├── dropdowns/    # Dropdown elements
│   │   │   └── header-element.ts
│   │   └── accessibility-widget-element.ts
│   ├── helpers/              # Helper utilities
│   │   ├── email-helper.ts   # Email validation helpers
│   │   └── expected-helper.ts # Assertion helpers
│   └── pages/                # Page classes
│       ├── book-demo.ts      # Book Demo page
│       └── main-page.ts      # Main page
├── tests/                    # Test files
│   ├── accessibility-widget-test.spec.ts
│   ├── book-demo-tests.spec.ts
│   ├── header-tests.spec.ts
│   └── main-page-test.spec.ts
├── playwright.config.ts      # Playwright configuration
└── tsconfig.json             # TypeScript configuration
```

## Architecture

The framework follows a Page Object Model pattern with the following components:

### Base Classes

- **BaseElement**: The foundation class for all elements, providing access to the Playwright Page object.
- **BasePage**: Extends BaseElement and adds common page functionality like navigation and common elements (header, accessibility widget).

### Pages

Page classes extend BasePage and represent specific pages on the website. They contain:
- Page-specific URL
- Locators for page elements
- Methods for page-specific actions

Example: `MainPage`, `BookDemo`

### Elements

Element classes extend BaseElement and represent reusable components on the website. They contain:
- Locators for elements within the component
- Methods for component-specific actions

Example: `HeaderElement`, `AccessibilityWidgetElement`

### Helpers

Helper classes provide utility functions for common tasks:
- **ExpectedHelper**: Provides assertion methods for checking element visibility, text, attributes, and visual comparison.
- **EmailHelper**: Provides email validation utilities.

## Testing Approach

The framework supports several testing approaches:

1. **Functional Testing**: Testing UI functionality like form submissions, navigation, etc.
2. **Visual Testing**: Comparing screenshots to detect visual changes.
3. **Validation Testing**: Checking form validation, error messages, etc.
4. **Data-Driven Testing**: Using data providers to test multiple scenarios.

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Install Playwright browsers (if needed):
   ```
   npx playwright install
   ```

## Running Tests

Run all tests:
```
npx playwright test
```

Run a specific test file:
```
npx playwright test tests/main-page-test.spec.ts
```

Run tests with UI mode:
```
npx playwright test --ui
```

## Test Reports

HTML reports are generated after test execution and can be found in the `playwright-report` directory.

To view the report:
```
npx playwright show-report
```