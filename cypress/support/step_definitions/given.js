import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('{word} is at his home', () => {
  // cy.visit('https://bdd-cucumber-demo.netlify.com/');
  cy.visit('https://8mz8t.codesandbox.io/');
});

Given("it's a {word}", (timeOfTheDay) => {
  if (timeOfTheDay === 'morning') {
    cy.get('[test-data="day"]').then(
      async ($daySelectButton) => {
        if (!$daySelectButton.hasClass('Mui-selected')) {
          $daySelectButton.click();
        }
      }
    );
  } else {
    cy.get('[test-data="night"]').then(async ($nightSelectButton) => {
      if (!$nightSelectButton.hasClass('Mui-selected')) {
        $nightSelectButton.click();
      }
    });
  }
});


// light is on/off
Given("light is {word}", (lightStatus) => {
  if (lightStatus === 'light-on') {
    cy.get('[test-data="light-on"]').then(
      async ($daySelectButton) => {
        if (!$daySelectButton.hasClass('Mui-selected')) {
          $daySelectButton.click();
        }
      }
    );
  } else {
    cy.get('[test-data="light-off"]').then(async ($nightSelectButton) => {
      if (!$nightSelectButton.hasClass('Mui-selected')) {
        $nightSelectButton.click();
      }
    });
  }
});