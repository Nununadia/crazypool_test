describe('FT01 - cek fitur discover activity', () => {

  it('discover activity', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-element-8bd2beb .elementor-icon-list-text').eq(0).click()
    })
})