describe('TS02 - cek fitur why choose crazypool', () => {

  it('mwhy choose crazypool', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get(':nth-child(4) > a > .elementor-icon-list-text').click()

    //mengecek minimize
    cy.get('#e-n-accordion-item-1620 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1620 > .e-n-accordion-item-title').click()

    //mengecek minimize
    cy.get('#e-n-accordion-item-1621 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1621 > .e-n-accordion-item-title').click()
    

    //mengecek minimize
    cy.get('#e-n-accordion-item-1622 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1622 > .e-n-accordion-item-title').click()
    

    //mengecek minimize
    cy.get('#e-n-accordion-item-1622 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1622 > .e-n-accordion-item-title').click()


    //mengecek minimize
    cy.get('#e-n-accordion-item-1680 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1680 > .e-n-accordion-item-title').click()
    

    //mengecek minimize
    cy.get('#e-n-accordion-item-1682 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1682 > .e-n-accordion-item-title').click()
   

    //mengecek minimize
    cy.get('#e-n-accordion-item-6391 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-6391 > .e-n-accordion-item-title').click()
    })
})





