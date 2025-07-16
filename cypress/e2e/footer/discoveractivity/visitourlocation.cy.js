describe('FT02 - cek fitur visit our location', () => {

  it('visit our location', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-element-8bd2beb .elementor-icon-list-text').eq(1).click()
    })
})





