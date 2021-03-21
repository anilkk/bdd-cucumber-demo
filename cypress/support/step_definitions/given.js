import { Given } from "cypress-cucumber-preprocessor/steps";

const isItDay = {
  morning: "yes",
  night: "no",
};

const setTimetoDay = () => {
  cy.get(`[data-test="night"]`).then(($el) => $el.click());
};

const setTimetoNight = () => {
  cy.get(`[data-test="day"]`).then(($el) => $el.click());
};

/**
 * We get input for morning or night
 * if it's already morning - timeOfTheDay == 'morning' do nothing
 * if it's night - timeOfTheDay == 'night' do switch night to morning
 * if it's already night - timeOfTheDay == 'night' do nothing
 * if it's morning - timeOfTheDay == 'night' do switch morning to night
 */
const selectTimeofTheDay = (timeOfTheDay) => {
  cy.get('[data-test="bdd-demo-app-container"]').then(($el) => {
    const timeOfTheDayValueOnDom = $el
      .get(0)
      .getAttribute("data-test-day-time");

    if (timeOfTheDayValueOnDom !== timeOfTheDay) {
      if (timeOfTheDay === "morning") {
        setTimetoDay();
      } else {
        setTimetoNight();
      }
    }
  });
};

Given("{word} is at her home", () => {
  cy.visit(Cypress.env("PRODUCTION_PAGE_URL"));
});

Given("it's a {word}", (timeOfTheDay) => {
  selectTimeofTheDay(timeOfTheDay);
});

// light is on/off
Given("lamp light is {word}", (lightStatus) => {
  cy.get("body").then(($el) => {
    if (
      lightStatus === "on" &&
      $el.find(`[data-test="light-on"]`).length === 0
    ) {
      cy.get('[data-test="light-off"]').then(async ($daySelectButton) => {
        $daySelectButton.click();
      });
    } else {
      if (
        lightStatus === "off" &&
        $el.find(`[data-test="light-off"]`).length === 0
      ) {
        cy.get('[data-test="light-on"]').then(async ($daySelectButton) => {
          $daySelectButton.click();
        });
      }
    }
  });
});
