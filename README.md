# Search Validation Project with Cypress

This project uses [Cypress](https://www.cypress.io) to validate a search on the `qualitytoolsautomation.com.br` website.

## Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

## Installation

1. Install the dependencies:

   ```sh
   npm install
   ```

## Running Tests

1. Open Cypress:  

   ```sh
   npx cypress open
   ```

In the Cypress interface, click on the website_search_spec.cy.js file to run the test.

2. Run Cypress tests from the command line:

   ```sh
   npx cypress run
   ```

3. Run Cypress tests with a specific tag:

   ```sh
   npx cypress run --env TAGS=@search
   ```
