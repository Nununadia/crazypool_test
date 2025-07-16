describe('TS02 - cek fitur Discover', () => {

  it('Discover', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-menu-toggle__icon--open').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-971 > .elementor-item').click()
   
    //menu minimize 1
    cy.get('#e-n-accordion-item-1620 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1620 > .e-n-accordion-item-title').click()
  
    //menu minimize2
    cy.get('#e-n-accordion-item-1621 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1621 > .e-n-accordion-item-title').click()

    //menu minimize3
    cy.get('#e-n-accordion-item-1622 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1622 > .e-n-accordion-item-title').click()

    //menu minimize4
    cy.get('#e-n-accordion-item-1680 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1680 > .e-n-accordion-item-title').click()

    //minimize5
    cy.get('#e-n-accordion-item-1681 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1681 > .e-n-accordion-item-title').click()

    //minimize6
    cy.get('#e-n-accordion-item-1682 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-1682 > .e-n-accordion-item-title').click()

    //minimize7
    cy.get('#e-n-accordion-item-6390 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-6390 > .e-n-accordion-item-title').click()

    //minimize8
    cy.get('#e-n-accordion-item-6391 > .e-n-accordion-item-title').click()
    cy.wait(700)
    cy.get('#e-n-accordion-item-6391 > .e-n-accordion-item-title').click()
    
    //pengisian form
    cy.get('#form-field-name').type('suep')
    cy.get('#form-field-email').type('japran96@gmail.com');
    cy.get('#form-field-field_8204047').type('good place')
    cy.get('#form-field-message').type('tingkatkan pelayanan')
    cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click()
  
  })
})