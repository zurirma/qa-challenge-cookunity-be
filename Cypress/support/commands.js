import { generateUniqueEmail } from './utils';

Cypress.Commands.add('updateUser', (userId, name) => {
  const email = generateUniqueEmail();
  const token = Cypress.env('token');

  return cy.api({
    method: 'PATCH',
    url: `/users/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {
      name,
      email,
      status: 'active',
    },
  });
});

Cypress.Commands.add('getUsers', () => {
    return cy.api({
      method: 'GET',
      url: '/users'
    });
  });
  
  Cypress.Commands.add('getUserById', (userId) => {
    return cy.api({
      method: 'GET',
      url: `/users/${userId}`
    });
  });
  