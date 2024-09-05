describe("User Registration Error Validation", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should display error messages when mandatory fields are not filled", () => {
    cy.get("#register-button").click();

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
