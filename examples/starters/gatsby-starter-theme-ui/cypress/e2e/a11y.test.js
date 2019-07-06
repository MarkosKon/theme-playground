// / <reference types="Cypress" />
// Guide: https://www.gatsbyjs.org/docs/end-to-end-testing/

describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
    cy.wait(500);
  });
  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y();
  });
  // it("Navigates to page 2 and checks for accessibility violations", () => {
  //   cy.getByText(/go to page 2/i)
  //     .click()
  //     .checkA11y();
  // });
  // it("Checks if footer link is focusable and has the correct attributes", () => {
  //   cy.getAllByText("Gatsby").focus();
  //   cy.focused()
  //     .should("have.text", "Gatsby")
  //     .should("have.attr", "href", "https://www.gatsbyjs.org")
  //     .should("not.have.css", "outline-width", "0px");
  // });
});
