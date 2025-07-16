describe('TS01 - cek fitur home', () => {

  it('Home', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-menu-toggle__icon--open').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-home > .elementor-item').click()

    //button become a partner today on homepage
    cy.get('.elementor-element-1a96c58 > .elementor-widget-container').click()
    cy.get('.elementor-menu-toggle__icon--open').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-home > .elementor-item').click()
    cy.get('.elementor-element-8594047 > .elementor-widget-container').click()
    
    //button find location on homepage
    cy.get('.elementor-menu-toggle__icon--open').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-home > .elementor-item').click()

    //memutar video on homepage
    cy.get('.elementor-custom-embed-image-overlay').click()

    })
})