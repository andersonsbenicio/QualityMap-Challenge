describe("API CRUD Operations Test", () => {
  let userId;
  beforeEach(() => {
    cy.fixture("user_data").as("user_data");
  });

  it("should create a new user successfully (POST)", function () {
    const uniqueEmail = `john.doe.${Date.now()}@example.com`;
    const newUser = { ...this.user_data, email: uniqueEmail };

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
    cy.getUser(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("_id", userId);
      expect(response.body).to.have.property("nome", "John Doe");
    });
  });

  it("should update the user successfully (PUT)", function () {
    const updatedEmail = `john.doe.updated.${Date.now()}@example.com`;

    const updatedUserData = {
      ...this.user_data,
      nome: "John Doe Updated",
      email: updatedEmail,
      password: "updatedpassword123",
      administrador: "false",
    };

    cy.updateUser(userId, updatedUserData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Registro alterado com sucesso"
      );
    });
  });

  it("should delete the user successfully (DELETE)", () => {
    cy.deleteUser(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        "Registro excluído com sucesso"
      );
    });
  });
});
