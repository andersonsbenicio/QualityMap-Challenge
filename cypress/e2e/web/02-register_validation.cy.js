/// <reference types="cypress" />

// Suite de testes para validar erros de registro de usuário
describe("User Registration Error Validation", () => {
  beforeEach(() => {
    cy.visit("/register"); // URL do endpoint de registro
  });

  it("should display error messages when mandatory fields are not filled", () => {
    // Clica no botão de registro sem preencher nenhum campo
    cy.get("#register-button").click();

    // Valida se as mensagens de erro apropriadas são exibidas para cada campo obrigatório
    cy.validateErrorMessage(
      "span[data-valmsg-for='FirstName']",
      "First name is required."
    );
    cy.validateErrorMessage(
      "span[data-valmsg-for='LastName']",
      "Last name is required."
    );
    cy.validateErrorMessage(
      "span[data-valmsg-for='Email']",
      "Email is required."
    );
    cy.validateErrorMessage(
      "span[data-valmsg-for='Password']",
      "Password is required."
    );
    cy.validateErrorMessage(
      "span[data-valmsg-for='ConfirmPassword']",
      "Password is required."
    );
  });
});
