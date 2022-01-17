describe('SignIn', () => {

  before(() => {
    cy.visit("/");
  });

  it('User should be able to log in', () => {
    cy.get('[href="/user/login"]').click();
    cy.url().should("include", "/user/login")
    cy.get('[placeholder="Email"]').type('aaron@mail.com');
    cy.get('[placeholder="Password"]').type("12345Qwert!");
    cy.get(".btn").should("have.attr", "type", "submit").click();
    cy.get('[href="/profile/aaron"]').should('be.visible');
  });

})
