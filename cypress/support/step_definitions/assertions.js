import { Then } from 'cypress-cucumber-preprocessor/steps';

// he should be able to read the book
Then(`she should be able to read the book`, () => {
  cy.getBySel(`success`).should('be.visible');
});

//he should not be able to read the book
Then(`she should not be able to read the book`, () => {
  cy.getBySel(`error`).should('be.visible');
});
