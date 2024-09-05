describe("API CRUD Operations Test", () => {
  let userId; // Variável para armazenar o ID do usuário criado

  // 1. Criação de um novo usuário (POST)
  it("should create a new user successfully (POST)", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("apiUrl") + "/usuarios",
      body: {
        nome: "John Doe",
        email: `john.doe.${Date.now()}@example.com`, // Gera um email único
        password: "password123",
        administrador: "true",
      },
      failOnStatusCode: false, // Permite o controle manual do status
    }).then((response) => {
      // Verifica se o status code é 201 (Created)
      expect(response.status).to.eq(201);
      // Verifica se a resposta contém o campo de mensagem de sucesso
      expect(response.body).to.have.property(
        "message",
        "Cadastro realizado com sucesso"
      );
      // Armazena o ID do usuário para uso posterior
      userId = response.body._id;
    });
  });

  // 2. Obtenção do usuário recém-criado (GET)
  it("should retrieve the created user successfully (GET)", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
      failOnStatusCode: false,
    }).then((response) => {
      // Verifica se o status code é 200 (OK)
      expect(response.status).to.eq(200);
      // Verifica se o usuário retornado possui o ID esperado
      expect(response.body).to.have.property("_id", userId);
      // Verifica se o nome do usuário é o esperado
      expect(response.body).to.have.property("nome", "John Doe");
    });
  });

  // 3. Atualização do usuário criado (PUT)
  it("should update the user successfully (PUT)", () => {
    cy.request({
      method: "PUT",
      url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
      body: {
        nome: "John Doe Updated",
        email: `john.doe.updated.${Date.now()}@example.com`, // Gera um email único atualizado
        password: "newpassword123",
        administrador: "false",
      },
      failOnStatusCode: false,
    }).then((response) => {
      // Verifica se o status code é 200 (OK)
      expect(response.status).to.eq(200);
      // Verifica se a resposta contém o campo de mensagem de sucesso
      expect(response.body).to.have.property(
        "message",
        "Registro alterado com sucesso"
      );
    });
  });

  // 4. Exclusão do usuário criado (DELETE)
  it("should delete the user successfully (DELETE)", () => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("apiUrl") + `/usuarios/${userId}`,
      failOnStatusCode: false,
    }).then((response) => {
      // Verifica se o status code é 200 (OK)
      expect(response.status).to.eq(200);
      // Verifica se a resposta contém o campo de mensagem de sucesso
      expect(response.body).to.have.property(
        "message",
        "Registro excluído com sucesso"
      );
    });
  });
});
