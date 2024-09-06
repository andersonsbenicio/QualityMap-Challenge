// Comando customizado para registrar um novo usuário no site
Cypress.Commands.add("registerUser", (user) => {
  // Definição de seletores para os gêneros
  const male = "#gender-male";
  const female = "#gender-female";
  // Função para selecionar aleatoriamente entre os gêneros
  function getRandomGenders() {
    const genders = [male, female];
    const random = Math.floor(Math.random() * genders.length);

    return genders[random];
  }

  const randomGenders = getRandomGenders();

  cy.get(randomGenders).click();
  cy.get("#FirstName").type(user.firstName);
  cy.get("#LastName").type(user.lastName);
  cy.get('select[name="DateOfBirthDay"]').select(user.day);
  cy.get('select[name="DateOfBirthMonth"]').select(user.month);
  cy.get('select[name="DateOfBirthYear"]').select(user.year);
  cy.get("#Email").type(user.email);
  cy.get("#Company").type(user.companyName);
  cy.get("#Newsletter").check();
  cy.get("#Password").type(user.password, { log: false });
  cy.get("#ConfirmPassword").type(user.password, { log: false });
});

// Comando customizado para validar mensagens de erro
Cypress.Commands.add("validateErrorMessage", (selector, expectedMessage) => {
  cy.get(selector).should("be.visible").and("have.text", expectedMessage);
});

// Comando customizado para criar um usuário via API (POST)
Cypress.Commands.add("createUser", (userData) => {
  return cy.request({
    method: "POST",
    url: Cypress.env("apiUrl") + "/usuarios",
    body: userData,
    failOnStatusCode: false,
  });
});

// Comando customizado para obter dados de um usuário via API (GET)
Cypress.Commands.add("getUser", (userId) => {
  return cy.request({
    method: "GET",
    url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
    failOnStatusCode: false,
  });
});

// Comando customizado para atualizar um usuário via API (PUT)
Cypress.Commands.add("updateUser", (userId, updatedUserData) => {
  return cy.request({
    method: "PUT",
    url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
    body: updatedUserData,
    failOnStatusCode: false,
  });
});

// Comando customizado para deletar um usuário via API (DELETE)
Cypress.Commands.add("deleteUser", (userId) => {
  return cy.request({
    method: "DELETE",
    url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
    failOnStatusCode: false,
  });
});
