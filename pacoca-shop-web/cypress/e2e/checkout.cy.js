describe('Fluxo de Checkout', () => {
  beforeEach(() => {
    // Força o estado de logado
    window.localStorage.setItem('isLoggedIn', 'true');
  });

  it('Deve adicionar itens ao carrinho e realizar checkout com sucesso', () => {
    // Acessa a Home
    cy.visit('/home');

    // Adiciona o primeiro e segundo produtos ao carrinho
    cy.get('[data-cy="add-product-1"]').click();
    cy.get('[data-cy="add-product-2"]').click();

    // Vai para a página do carrinho
    cy.contains('Carrinho').click();
    cy.url().should('include', '/cart');

    // Verifica se os itens estão no carrinho e avança para checkout
    cy.contains('Ração Premium Cães 15kg').should('be.visible');
    cy.get('[data-cy="checkout-button"]').click();
    cy.url().should('include', '/checkout');

    // Preenche os dados de pagamento
    cy.get('[data-cy="credit-card-input"]').type('4111 1111 1111 1111');
    cy.get('[data-cy="pay-button"]').click();

    // Verifica se chegou na página de sucesso
    cy.url().should('include', '/success');
    cy.contains('Sucesso absoluto!').should('be.visible');
  });
});
