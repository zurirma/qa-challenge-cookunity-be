import { getFirstActiveUser } from '../support/utils';

describe('API Test - Get Active User', () => {
    it('should get the first active user and validate status', () => {
      //Get a list of users
      cy.getUsers().then((res) => {
        expect(res.status, '/users should return HTTP 200 OK').to.eq(200);

        //Find the first active user from the list
        const users = res.body.data;
        const activeUser = getFirstActiveUser(users);
        expect(activeUser, 'At least one user with status "active" should exist').to.exist;

        //Get user details 
        cy.getUserById(activeUser.id).then((response) => {
          //Log user details for visibility
            cy.log(`User ID: ${response.body.data.id}`);
            cy.log(`User Name: ${response.body.data.name}`);
            cy.log(`User Email: ${response.body.data.email}`);
            cy.log(`User Status: ${response.body.data.status}`);

            expect(response.status, '/users/{id} should return HTTP 200 OK').to.eq(200);
            expect(response.body.data.status, 'User status should be "active"').to.eq('active');
        });
      });
    });
  });
  
  