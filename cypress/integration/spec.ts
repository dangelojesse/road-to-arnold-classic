/// <reference types="cypress" />

it('loads examples', () => {
  cy.visit('localhost:4200');
  cy.contains('road-to-arnold-classic');
});
