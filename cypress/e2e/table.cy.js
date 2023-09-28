/* eslint-disable no-undef */

describe("table tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays the coins table when user visits the page", () => {
    cy.get('[data-testid="coins-datagrid"]').should("be.visible");
  });

  it("navigates to coin URL when a row is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="coins-datagrid"] .MuiDataGrid-row').first().click();

    cy.url().should("include", "/coin/");
  });

  it("filters the coins table based on the search input", () => {
    cy.get('[data-testid="search-coin-input"]').type("Bitcoin");
    cy.get('[data-testid="coins-datagrid"] .MuiDataGrid-row').should(
      "have.length",
      4
    );
  });

  it("switches pages correctly with pagination controls", () => {
    cy.get('[aria-label="Go to next page"]').click();
    cy.contains("6–10 of 100").should("be.visible");
  });
});
