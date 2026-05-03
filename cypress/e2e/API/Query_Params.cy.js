describe.only("Practicing Query Parameters", () => {
  const query_Parameter = { userId:1 };
  const target_URL = "https://jsonplaceholder.typicode.com/posts"

  it.only("Passing Query Paramters", () => {
    cy.request({
      method: "GET",
      url: target_URL,
      qs: query_Parameter,
    }).then((response) => {
      expect(response.status).to.eq(200);
    //   expect(response.body.page).equal(2);
    //   expect(response.data.length).has.length(6);
    //   expect(response.body.data[0]).to.have.property("id", 7);
    });
  });
});