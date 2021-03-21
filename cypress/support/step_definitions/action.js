import { When } from 'cypress-cucumber-preprocessor/steps';

/**
 * method click
 * 
 * It's custom click method using .then()
 * https://docs.cypress.io/api/commands/then.html#Syntax
 * 
 * @param {string} selector 
 */
const click = (selector) => {
  cy.get(selector).then(async ($selector) => {
    $selector.click();
  });
};


// she switch on the light
When('she switch on the light', () => {
  cy
  .get(`[data-test="light-off"]`)
  .should(($el) => {
    expect($el).to.have.length(1)
  })
  .then(() => {
    click('[data-test="light-off"]');
  });
});


// she switch on the light with <light_color>
When('she switch on the light with {word}', (lightColor) => {

  cy
  .get(`[data-test="light-off"]`)
  .should(($el) => {
    expect($el).to.have.length(1)
  })
  .then(() => {
    click(`input[value="${lightColor}"]`);
    click('[data-test="light-off"]');
  })
});
