describe('TS0 - cek fitur gallery', () => {

  it('Gallery', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-menu-toggle__icon--open').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-969 > .elementor-item').click();
    })
})