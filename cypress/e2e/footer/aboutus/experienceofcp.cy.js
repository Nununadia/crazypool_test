describe('FT08 - cek fitur experience of crazypool', () => {

  it('experience', () => {
    cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-element-7f6fcf3 .elementor-icon-list-text').eq(2).click()
    })
})





