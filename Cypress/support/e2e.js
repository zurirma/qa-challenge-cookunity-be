import './commands';
import 'cypress-mochawesome-reporter/register';
import 'cypress-plugin-api';


Cypress.on('fail', (error, runnable) => {
    Cypress.runner.stop();
    throw error;
  });
  
