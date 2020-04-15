import { Then } from 'cypress-cucumber-preprocessor/steps';

// he should be able to read the the news paper
Then(`he should be able to read the the news paper`, () => {
  cy.get(`[test-data="success"]`).should('be.visible');
});

//he should not be able to read the the news paper
Then(`he should not be able to read the the news paper`, () => {
  cy.get(`[test-data="fail"]`).should('be.visible');
});