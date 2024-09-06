/// <reference types="cypress" />

// Importação da biblioteca Faker para gerar dados fictícios
const { faker } = require("@faker-js/faker");

describe("User Registration with Success", () => {
  beforeEach(() => {
    cy.visit("/register?returnUrl=%2F"); // URL do endpoint de registro
  });

  it("should register a new user successfully and validate date value", () => {
    // Geração de dados fictícios para o usuário usando a biblioteca Faker
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const birthdate = faker.date.birthdate({ min: 18, max: 65, mode: "age" });
    const day = birthdate.getDate().toString();
    const month = (birthdate.getMonth() + 1).toString();
    const year = birthdate.getFullYear().toString();

    // Criação de um objeto de usuário com dados fictícios
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
      companyName: faker.company.name(),
      password: faker.internet.password(8, true, /[A-Za-z0-9]/, "Passw0rd!"),
    };

    // Escreve os dados gerados para um arquivo fixture para reuso e rastreamento
    cy.writeFile("cypress/fixtures/user.json", user);

    // Registra um usuário com os dados gerados
    cy.registerUser(user);

    // Verifica se os valores de data de nascimento inseridos estão corretos
    cy.get('select[name="DateOfBirthDay"]').should("have.value", user.day);
    cy.get('select[name="DateOfBirthMonth"]').should("have.value", user.month);
    cy.get('select[name="DateOfBirthYear"]').should("have.value", user.year);

    // Ao clicar no botão registrar, aparece um captcha, no qual não obtive êxito em desbloquear
    //cy.get("#register-button").click();

    // Verifica se a mensagem de registro bem-sucedido é exibida
    // cy.get(".result")
    //   .should("be.visible")
    //   .should("have.text", "Your registration completed");
  });
});
