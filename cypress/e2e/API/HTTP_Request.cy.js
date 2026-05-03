describe("Sample HTTP Request", () => {
  it("HTTP Request Passing Example", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("eq", 200);
  });
});