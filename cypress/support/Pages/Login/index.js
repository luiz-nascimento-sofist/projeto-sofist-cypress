class Login {
    
    acessarSiteDoSwagLabs() {

        cy.visit('/');

    }
    
    loginComUsuarioComLoginESenhaValidos() {

        cy.get('[data-test=username]').type(`${Cypress.env('usuarioValido')}`);
        cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
        cy.get('[data-test=login-button]').click();
        cy.get('.title').should('contain', 'Products');

    }

    loginComUsuarioBloqueado() {

        cy.get('[data-test=username]').type('locked_out_user');
        cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
        cy.get('[data-test=login-button]').click();
        cy.get('.error-message-container').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    }

    loginComUsuarioProblematico() {
        cy.get('[data-test=username]').type('problem_user');
        cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
        cy.get('[data-test=login-button]').click();
        cy.get('.title').should('contain', 'Products');
    }
    loginComUsuarioEmBranco() {
        cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
        cy.get('[data-test=login-button]').click();
        cy.get('.error-message-container').should('contain', 'Epic sadface: Username is required');
    }

    loginComSenhaEmBranco() {
        cy.get('[data-test=username]').type('usuario');
        cy.get('[data-test=login-button]').click();
        cy.get('.error-message-container').should('contain', 'Epic sadface: Password is required');
    }
    usuarioPreenchidoESenhaInvalida() {
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('ola');
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test=error]').should('contain','Epic sadface: Username and password do not match any user in this service');

    }
    loginComUsuarioESenhaValidosBDD() {
        cy.get('[data-test=username]').type(`${Cypress.env('usuarioValido')}`);
        cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
    }
    clicarNoBotaoDeLogin(){
        cy.get('[data-test=login-button]').click();
    }
    assertivaParaVerificarSeEstouNaPaginaDeProdutos() {
        cy.get('.title').should('contain', 'Products');
    }
    mensagemDeUsuarioBloqueado(){
        cy.get('.error-message-container').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    }
    loginComUsuarioProblematicoBDD() {
        cy.get('[data-test=username]').type('problem_user');
	    cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
    }
    preencherSomenteSenhaValida(){
        cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
    }
    mensagemDeUsuarioNaoPreenchido(){
        cy.get('.error-message-container').should('contain', 'Epic sadface: Username is required');
    }
    preencherSomenteUsuarioValido() {
        cy.get('[data-test=username]').type('standard_user');
    }
    mensagemDeSenhaNaoPreenchida() {
        cy.get('.error-message-container').should('contain', 'Epic sadface: Password is required');
    }
    preencherComSenhaInvalidaQualquer() {
	    cy.get('[data-test=password]').type('ola');
    }
    mensagemDeQueUsuarioESenhaNaoConferem() {
        cy.get('[data-test=error]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    }
    loginUsuarioBloqueadoBDD() {
        cy.get('[data-test=username]').type('locked_out_user');
	    cy.get('[data-test=password]').type(`${Cypress.env('senhaAutorizada')}`);
    }
}

export default new Login();