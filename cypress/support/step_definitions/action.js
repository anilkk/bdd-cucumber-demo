import { When } from 'cypress-cucumber-preprocessor/steps';

// she switch on the light
When('she switch on the light', () => {
  cy.get('body').then(($el) => {
    if ($el.find(`[test-data="light-off"]`).length) {
      cy.get('[test-data="light-off"]').then(async ($lightSwitchButton) => {
        $lightSwitchButton.click();
      });
    }
  });
});


// she switch on the light with <light_color>
When('she switch on the light with {word}', (lightColor) => {
  cy.get('body').then(($el) => {
    if ($el.find(`[test-data="light-off"]`).length) {
      cy.get(`input[value="${lightColor}"]`).click();
      cy.get('[test-data="light-off"]').then(async ($lightSwitchButton) => {
        $lightSwitchButton.click();
      });
    }
  });
});
