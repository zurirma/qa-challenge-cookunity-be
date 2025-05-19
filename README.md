# Backend API Automation Challenge - GoRest

This repository contains an automated test suite written in Cypress to test RESTful API endpoints provided by https://gorest.co.in/public/.  
The tests were developed as part of a technical challenge, using JavaScript, Cypress best practices, and detailed validations to simulate real-world API scenarios.

---

# Project Setup

 1. Clone the repository

git clone https://github.com/zurirma/your-backend-challenge-repo.git
cd your-backend-challenge-repo

2. Install dependencies

npm install

3. Environment configuration
Create a cypress.env.json file in the root of the project and add your API token:

{
  "token": "55d6636b25b84832f383665a17f72117ee2b5e655a78ba968912c9a37d1c050f"
}

# Project Structure

cypress/api/
Contains the API test scenarios for the challenge:

get_active_user.cy.js: Validates retrieval of an active user.

update_user_name.cy.js: Validates updating a user's name.

cypress/support/
Utility and configuration files for the test suite:

commands.js: Custom Cypress commands (getUsers, updateUser, etc.).

utils.js: Reusable helper functions (e.g., generate random emails).

e2e.js: Loads custom commands and plugin setups.

cypress/reports/
Stores Mochawesome HTML and JSON reports after test execution.  Also the videos of the run process.

cypress/downloads/
Optional directory for storing downloaded reports or artifacts.

cypress.env.json
Environment file that securely holds sensitive data like the API token.

cypress.config.js
Cypress configuration file with base URL, reporter settings, and plugin setup.

# Plugins & Tools Used

cypress-plugin-api
Replaces cy.request() with cy.api() to make API responses visible in the Cypress Test Runner UI — useful for debugging and better transparency in test results.

Mochawesome Reporter
For generating detailed HTML reports after test execution.

# Test Reporting
Run tests and generate report:
npm run report
This command will execute all tests.


Open the report:
npm run report:open


# Best Practices Implemented
✅ Modular architecture using custom commands and helper functions.

✅ Secure handling of API tokens via cypress.env.json.

✅ Assertions tied to business logic (e.g., validating user status).

✅ Clear test flow aligned with challenge instructions.

✅ Readable Cypress UI using cypress-plugin-api.

# Additional Notes
The test framework can be easily extended to support more endpoints or environments.

Token security was handled via Cypress.env() for local development.

# Commands	
npm run test:	Runs Cypress tests in headless mode
npx cypress open:	Opens the Cypress Test Runner UI
npm run report:	 Runs tests and generates Mochawesome report
npm run report open:	Opens the generated HTML report

