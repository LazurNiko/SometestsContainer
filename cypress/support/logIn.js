Cypress.Commands.add('login', (email = 'aaron@mail.com', password = '12345Qwert!') => {
  cy.request({
      method: "POST",
      url: "https://cirosantilli-realworld-next.herokuapp.com/api/users/login",
      body: {
      "user": {
          "email": email,
          "password": password,
      }
      }
  }).then((resp) => {
      window.localStorage.setItem('jwt', resp.body.user.token);
  });
});
