describe('Проверка добавления и отправки', () => {
  beforeEach(() => {
    cy.intercept("GET", "api/auth/user", { fixture: "user.json" });
    cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");

    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );

    cy.visit("http://localhost:3000");
  });
  
  it('Добавление и отправка', () => {
    cy.get('[data-test="Краторная булка N-200i"]').trigger('dragstart');
    cy.get('[data-test="BurgerConstructor"]').trigger('drop');
    cy.get('[data-test="Краторная булка N-200i"]').trigger('dragover');
    cy.get('[data-test="Соус Spicy-X"]').trigger('dragstart');
    cy.get('[data-test="BurgerConstructor"]').trigger('drop');
    cy.get('[data-test="Соус Spicy-X"]').trigger('dragover');
    cy.get('[data-test="SendOrder"]').click();
  })
})