describe('Fluxo de Autenticação', () => {
  it('Deve exibir erro com senha inválida', () => {
    cy.visit('/login')
    cy.get('[data-cy="password"]').type('errada')
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="error-message"]')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 0, 0)') // Valida se é vermelho
  })

  it('Deve logar com sucesso usando a senha 123', () => {
    cy.visit('/login')
    cy.get('[data-cy="password"]').type('123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/home')
  })
})
