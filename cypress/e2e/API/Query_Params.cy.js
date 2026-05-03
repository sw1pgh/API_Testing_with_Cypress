describe("Practicing Query Parameters", () => {
  const query_Parameter = { userId: 1 };
  const target_URL = "https://jsonplaceholder.typicode.com/posts";

  it("Passing Query Paramters", () => {
    cy.request({
      method: "GET",
      url: target_URL,
      qs: query_Parameter,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).has.length(10);
      expect(response.body[0].userId).to.eq(1);
    });
  });

  it("Rest Countries API", () => {
    cy.request({
      method: "GET",
      url: "https://restcountries.com/v3.1/name/india",
      qs: { fullText: true },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
