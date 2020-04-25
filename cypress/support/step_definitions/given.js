import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('{word} is at her home', () => {
  cy.visit('https://bdd-cucumber-demo.netlify.app/');
});

Given("it's a {word}", (timeOfTheDay) => {
  cy.get('body').then(($el) => {
    if (
      timeOfTheDay === 'morning' &&
      $el.find(`[test-data="day"]`).length === 0
    ) {
      cy.get('[test-data="night"]').then(async ($daySelectButton) => {
        $daySelectButton.click();
      });
    } else {
      if (
        timeOfTheDay === 'night' &&
        $el.find(`[test-data="night"]`).length === 0
      ) {
        cy.get('[test-data="day"]').then(async ($daySelectButton) => {
          $daySelectButton.click();
        });
      }
    }
  });
});

// light is on/off
Given('light is {word}', (lightStatus) => {
  cy.get('body').then(($el) => {
    if (
      lightStatus === 'on' &&
      $el.find(`[test-data="light-on"]`).length === 0
    ) {
      cy.get('[test-data="light-off"]').then(async ($daySelectButton) => {
        $daySelectButton.click();
      });
    } else {
      if (
        lightStatus === 'off' &&
        $el.find(`[test-data="light-off"]`).length === 0
      ) {
        cy.get('[test-data="light-on"]').then(async ($daySelectButton) => {
          $daySelectButton.click();
        });
      }
    }
  });
});
