describe('TS04 - cek fitur aboutus', () => {

  it('About Us', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-menu-toggle__icon--open').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-972 > .elementor-item').click()
    })
})