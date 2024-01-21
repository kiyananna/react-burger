describe('service is available', function() {
    it('should be available on localhost:3000', function() {
      cy.visit('http://localhost:3000');
    });
  }); 


  describe('Проверка открытия модального окна ингредиента', () => {
    it('При клике на ингредиент должна открываться модалка с информацией о нём', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="Краторная булка N-200i"]').click();
    cy.get('[id="modal"]').contains('Краторная булка N-200i');
  })
})

describe('Проверка D&D', () => {
    it('Отображение сверху и снизу', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-test="Краторная булка N-200i"]').trigger('dragstart');
        cy.get('[data-test="BurgerConstructor"]').trigger('drop');
        cy.get('[data-test="Краторная булка N-200i"]').trigger('dragover');
      })
    it('Проверка перетаскивания в конструктор', () => {
      cy.visit('http://localhost:3000/');
  
      cy.get('[data-test="Соус Spicy-X"]').trigger('dragstart');
      cy.get('[data-test="BurgerConstructor"]').trigger('drop');
      cy.get('[data-test="Соус Spicy-X"]').trigger('dragover');
      cy.get('[data-test="BurgerConstructor"]').contains('Соус Spicy-X');
    })
  })

