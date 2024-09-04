describe("User Registration Error Validation", () => {
  beforeEach(() => {
    cy.visit("https://demo.nopcommerce.com/register");
  });

  it("should display error messages when mandatory fields are not filled", () => {
    cy.get("#register-button").click(); // Clica no botão de registro

    // Valida as mensagens de erro para cada campo obrigatório
    cy.validateErrorMessage(
      ".field-validation-error",
      "First name is required."
    );
    cy.validateErrorMessage(
      ".field-validation-error",
      "Last name is required."
    );
    cy.validateErrorMessage(".field-validation-error", "Email is required.");
    cy.validateErrorMessage(".field-validation-error", "Password is required.");
    cy.validateErrorMessage(".field-validation-error", "Password is required.");
  });
});

//span[@class='field-validation-error'][contains(.,'First name is required.')]
