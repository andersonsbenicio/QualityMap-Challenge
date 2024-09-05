// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("registerUser", (user) => {
  cy.get("#gender-male").click();
  cy.get("#FirstName").type(user.firstName);
  cy.get("#LastName").type(user.lastName);
  cy.get('select[name="DateOfBirthDay"]').select(user.day);
  cy.get('select[name="DateOfBirthMonth"]').select(user.month);
  cy.get('select[name="DateOfBirthYear"]').select(user.year);
  cy.get("#Email").type(user.email);
  cy.get("#Password").type(user.password, { log: false });
  cy.get("#ConfirmPassword").type(user.password, { log: false });
});

Cypress.Commands.add("validateErrorMessage", (selector, expectedMessage) => {
  cy.get(selector).should("be.visible").and("have.text", expectedMessage);
});
