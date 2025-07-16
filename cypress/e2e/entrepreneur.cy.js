describe('TS06 - Form entrepreneur', () => {
  beforeEach(() => {
   cy.visit('https://www.crazypool.nl/')
    cy.get('.elementor-menu-toggle__icon--open').click()
    cy.get('#menu-2-40cdcc3 > .menu-item-1279 > .elementor-item').click()
  });

    //mengisi form dengan fixtures
     it('mengisi form menggunakan data dari fixtures', function () {
      cy.fixture('isiform').then((data) => {
      cy.get('#form-field-name').type(data.Name);      
      cy.get('#form-field-email').type(data.Email);
      cy.get('#form-field-field_8204047').type(data.Subject);
      cy.get('#form-field-field_c19820a').type(data.VenueName);
      cy.get('#form-field-field_84ead58').type(data.Location);
      cy.get('#form-field-message').type(data.Message);

      //buttonsubmit
      cy.intercept('POST', '**/admin-ajax.php').as('submitForm');
      cy.get('.elementor-field-type-submit .elementor-button-content-wrapper').click();
      cy.wait('@submitForm').its('response.statusCode').should('eq', 200);
    });
  });
});
