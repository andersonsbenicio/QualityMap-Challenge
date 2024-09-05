describe("API CRUD Operations Test", () => {
  let userId; // Variável para armazenar o ID do usuário criado

  beforeEach(() => {
    // Carrega os dados do fixture antes de cada teste
    cy.fixture("user_data").as("user_data");
  });

  it("should create a new user successfully (POST)", function () {
    // Gera um e-mail único para cada execução do teste
    const uniqueEmail = `john.doe.${Date.now()}@example.com`;
    const newUser = { ...this.user_data, email: uniqueEmail };

    // Usa o comando customizado para criar o usuário
    cy.createUser(newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "message",
        "Cadastro realizado com sucesso"
      );
      userId = response.body._id; // Armazena o ID do usuário criado
    });
  });

  it("should retrieve the created user successfully (GET)", () => {
    // Usa o comando customizado para obter o usuário
    cy.getUser(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("_id", userId);
      expect(response.body).to.have.property("nome", "John Doe");
    });
  });

  it("should update the user successfully (PUT)", function () {
    const updatedEmail = `john.doe.updated.${Date.now()}@example.com`; // Gera um e-mail único para atualização

    // Atualiza todos os campos necessários
    const updatedUserData = {
      ...this.user_data,
      nome: "John Doe Updated",
      email: updatedEmail,
      password: "updatedpassword123", // Atualiza o campo de senha
      administrador: "false", // Atualiza o campo de administrador
    };

    // Usa o comando customizado para atualizar o usuário
    cy.updateUser(userId, updatedUserData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Registro alterado com sucesso"
      );
    });
  });

  it("should delete the user successfully (DELETE)", () => {
    // Usa o comando customizado para deletar o usuário
    cy.deleteUser(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Registro excluído com sucesso"
      );
    });
  });
});
