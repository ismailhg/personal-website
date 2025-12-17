describe("Language and Theme Toggle Toast Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Shows toast when dark mode is toggled", () => {
    cy.get('[data-cy="theme-toggle"]').click();

    cy.contains(/Dark mode activated|Light mode activated/).should(
      "be.visible"
    );
  });

  it("Shows toast when language is toggled", () => {
    cy.get('[data-cy="language-toggle"]').click();

    cy.contains(
      /Dil Türkçe olarak değiştirildi|Language switched to English/
    ).should("be.visible");
  });
});
