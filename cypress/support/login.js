Cypress.Commands.add('login' , (email, password)=>{ //Comando de realizar una busqueda en la Pagina

    cy.fixture('login').then((login) =>{

            cy.get(login.loginLink).click();
            cy.get(login.emailBox).type(email);
            cy.get(login.passwdBox).type(password);

            cy.get(login.loginButton).click();

    })

})