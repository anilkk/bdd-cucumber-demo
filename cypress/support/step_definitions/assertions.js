import { Then } from 'cypress-cucumber-preprocessor/steps';

// she should be able to read the book
Then(`she should be able to read the book`, () => {
  cy.get(`[test-data="success"]`).should('be.visible');
});

//she should not be able to read the book
Then(`she should not be able to read the book`, () => {
  cy.get(`[test-data="error"]`).should('be.visible');
});
