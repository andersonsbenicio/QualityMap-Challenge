describe("User Registration", () => {
  beforeEach(() => {
    cy.visit("https://demo.nopcommerce.com/register");
  });

  it("should register a new user successfully", () => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      day: "1",
      month: "January",
      year: "1990",
      email: `john.doe${Date.now()}@example.com`,
      password: "Password123!",
    };

    cy.registerUser(user);

    cy.get(".result").should("contain", "Your registration completed");
  });

  it("should validate the selected date of birth", () => {
    cy.get('select[name="DateOfBirthDay"]')
      .select("1")
      .should("have.value", "1");
    cy.get('select[name="DateOfBirthMonth"]')
      .select("January")
      .should("have.value", "1");
    cy.get('select[name="DateOfBirthYear"]')
      .select("1990")
      .should("have.value", "1990");
  });
});
