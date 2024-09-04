describe("Home Page Load Test", () => {
  before(() => {
    // Visita a página inicial antes do teste
    cy.visit("https://demo.nopcommerce.com");
  });

  it("should load the home page with the correct URL and title", () => {
    // Verifica se o URL da página está correto
    cy.url().should("eq", "https://demo.nopcommerce.com/");

    // Verifica se o título da página é o esperado
    cy.title().should("eq", "nopCommerce demo store");
  });
});
