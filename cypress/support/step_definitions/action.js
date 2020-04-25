import { When } from 'cypress-cucumber-preprocessor/steps';

// he switch on the light
When('she switch on the light', () => {
  cy.get('body').then(($el) => {
    if ($el.find(`[test-data="light-off"]`).length) {
      cy.get('[test-data="light-off"]').then(async ($lightSwitchButton) => {
        $lightSwitchButton.click();
      });
    }
  });
});
