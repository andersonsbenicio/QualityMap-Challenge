describe("API CRUD Operations Test", () => {
  // Variável para armazenar o ID do usuário criado
  let userId;

  beforeEach(() => {
    // Carrega as massas de dados dos arquivos fixture para os testes
    cy.fixture("user_data").as("user_data");
    cy.fixture("user_data_update").as("user_data_update");
  });

  it("should create a new user successfully (POST)", function () {
    // Gera um e-mail único para evitar duplicidade durante a criação
    const uniqueEmail = `john.doe.${Date.now()}@example.com`;
    // Clona os dados do usuário do fixture e adiciona o e-mail único
    const newUser = { ...this.user_data, email: uniqueEmail };

    // Executa a criação do usuário
    cy.createUser(newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "message",
        "Cadastro realizado com sucesso"
      );
      userId = response.body._id;
    });
  });

  it("should retrieve the created user successfully (GET)", () => {
    // Executa a requisição para obter os dados do usuário
    cy.getUser(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("_id", userId);
      expect(response.body).to.have.property("nome", "John Doe");
    });
  });

  it("should update the user successfully (PUT)", function () {
    // Gera um e-mail atualizado para o usuário
    const updatedEmail = `john.doe.updated.${Date.now()}@example.com`;
    // Clona os dados de atualização do usuário e modifica o e-mail
    const updatedUserData = {
      ...this.user_data,
      email: updatedEmail,
    };
    // Executa a requisição para atualizar o usuário com os dados clonados
    cy.updateUser(userId, updatedUserData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Registro alterado com sucesso"
      );
    });
  });

  it("should delete the user successfully (DELETE)", () => {
    // Executa a requisição para deletar o usuário criado
    cy.deleteUser(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Registro excluído com sucesso"
      );
    });
  });
});
