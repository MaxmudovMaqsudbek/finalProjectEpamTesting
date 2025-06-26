# Sauce Demo Login Test Automation

## Task Description

Launch URL: https://www.saucedemo.com/

**UC-1** Test Login form with empty credentials:
- Type any credentials into "Username" and "Password" fields.
- Clear the inputs.
- Hit the "Login" button.
- Check the error messages: "Username is required".

**UC-2** Test Login form with credentials by passing Username:
- Type any credentials in username.
- Enter password.
- Clear the "Password" input.
- Hit the "Login" button.
- Check the error messages: "Password is required".

**UC-3** Test Login form with credentials by passing Username & Password:
- Type credentials in username which are under Accepted username are sections.
- Enter password as secret sauce.
- Click on Login and validate the title "Swag Labs" in the dashboard.

## Technical Implementation
- Test Automation tool: WebDriverIO
- Browsers: Chrome, Edge
- Locators: XPath
- Patterns: Page Object
- Assertions: WebDriverIO framework assertions
- Logger: Winston
- Parallel execution enabled
- Data Provider for test parameterization

## Installation
```bash
npm install
```

## Running Tests
```bash
# Run all tests in parallel on Chrome and Edge
npm test
```