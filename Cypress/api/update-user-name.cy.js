import { getFirstUser } from '../support/utils';

describe('API Test - Update User Name', () => {
  it('should update the name of the first user in the list', () => {
    const newName = "QA Test";
    //Get a list of users
    cy.getUsers().then((res) => {
      expect(res.status, '/users status should be 200').to.eq(200);

      //Take the first user from the list
      const firstUser = getFirstUser(res.body.data);
      expect(firstUser, 'Expected at least one user in response').to.exist;

      //Update the user's name
      cy.updateUser(firstUser.id, newName).then((updateRes) => {
        expect(updateRes.status, 'User update request should return HTTP 200 OK').to.eq(200);
        expect(updateRes.body.data.name, 'User name should match the updated value').to.eq(newName);
        expect(updateRes.body.data.status, 'User should remain active after update').to.eq('active');
      });
    });
  });
});

  
  
  
  