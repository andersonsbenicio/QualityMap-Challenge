/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");

describe("User Registration with Success", () => {
  before(() => {
    cy.visit("https://demo.nopcommerce.com/register");
  });

  it("should register a new user successfully and validate date value", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const birthdate = faker.date.birthdate({ min: 18, max: 65, mode: "age" });
    const day = birthdate.getDate().toString();
    const month = (birthdate.getMonth() + 1).toString();
    const year = birthdate.getFullYear().toString();

    const user = {
      firstName: firstName,
      lastName: lastName,
      day: day,
      month: month,
      year: year,
      email: `${firstName}.${lastName}${faker.number.int({
        min: 100,
        max: 999,
      })}@example.com`,
      password: faker.internet.password(8, true, /[A-Za-z0-9]/, "Passw0rd!"),
    };

    cy.registerUser(user);

    cy.get('select[name="DateOfBirthDay"]').should("have.value", user.day);
    cy.get('select[name="DateOfBirthMonth"]').should("have.value", user.month);
    cy.get('select[name="DateOfBirthYear"]').should("have.value", user.year);

    cy.get("#register-button").click();

    cy.get(".result").should("contain", "Your registration completed");
  });
});
