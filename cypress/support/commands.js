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

Cypress.Commands.add("createUser", (userData) => {
  return cy.request({
    method: "POST",
    url: Cypress.env("apiUrl") + "/usuarios",
    body: userData,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("getUser", (userId) => {
  return cy.request({
    method: "GET",
    url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("updateUser", (userId, updatedUserData) => {
  return cy.request({
    method: "PUT",
    url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
    body: updatedUserData,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("deleteUser", (userId) => {
  return cy.request({
    method: "DELETE",
    url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
    failOnStatusCode: false,
  });
});
