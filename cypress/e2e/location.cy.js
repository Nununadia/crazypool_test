describe('TS05 - cek fitur location', () => {

  it('Location', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-menu-toggle').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-970 > .elementor-item').click()

    //view map location
    cy.get('.e-loop-item-732 .elementor-button').click()
    cy.wait(1000)
    cy.get('.e-loop-item-734 .elementor-button').click()
    cy.wait(1000)
    cy.get('.e-loop-item-735 .elementor-button').click()
    cy.wait(1000)
    cy.get('.e-loop-item-737 .elementor-button').click()
    cy.wait(1000)

    //butto inqiury
    cy.get('.elementor-element-69e9c53 .elementor-button').click()
    })
})