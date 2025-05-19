
export function generateUniqueEmail() {
    const random = Math.floor(Math.random() * 100000);
    return `testuser${random}@yopmail.com`;
  }

export function getFirstActiveUser(users) {
    return users.find(user => user.status === 'active');
  }

export function getFirstUser(users) {
    return users[0];
  }
  
  
  