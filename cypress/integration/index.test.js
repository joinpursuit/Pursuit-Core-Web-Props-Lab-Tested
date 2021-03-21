describe("Index", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays progress", () => {
    cy.contains("Raised $150 of $5000");
  });

  it("lists donations", () => {
    cy.get("ul li").each(($child) => {
      cy.wrap($child).contains("John donated $50");
    });
  });
});
