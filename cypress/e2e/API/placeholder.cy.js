it('fetches a user and validates status', () => {
  cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Leanne Graham');
    });
});