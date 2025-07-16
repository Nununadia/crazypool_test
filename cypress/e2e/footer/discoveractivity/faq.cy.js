describe('FT03 - cek fitur FAQ', () => {

  it('FAQ', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-element-8bd2beb .elementor-icon-list-text').eq(2).click()
    })
})





