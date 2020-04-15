import { When } from 'cypress-cucumber-preprocessor/steps';

// he switch on the light
When('he switch on the light', () => {
  cy.get('[test-data="light-on"]').then(async ($lightOnButton) => {
    if (!$lightOnButton.hasClass('Mui-selected')) {
      $lightOnButton.click();
    }
  });
});
