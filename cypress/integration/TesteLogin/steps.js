import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../support/Pages/Login/index';

//Cenario 1 - Usuário e senha corretos

Given(/^que o usuário está na página de login$/, () => {
	Login.acessarSiteDoSwagLabs();
});

When(/^o usuário tenta realizar o login com usuário e senha válidos$/, () => {
	Login.loginComUsuarioESenhaValidosBDD();
	Login.clicarNoBotaoDeLogin();
});

Then(/^será direcionado para a página de produtos$/, () => {
	Login.assertivaParaVerificarSeEstouNaPaginaDeProdutos();
});

//Cenario 2 - Usuário Bloqueado

When(/^o usuário tenta realizar o login com usuário bloqueado e senha válida$/, () => {
	Login.loginUsuarioBloqueadoBDD();
	Login.clicarNoBotaoDeLogin();
});

Then(/^será exibida uma mensagem de erro de usuário bloqueado$/, () => {
	Login.mensagemDeUsuarioBloqueado();
});

//Cenario 3 - Usuário problemático

When(/^o usuário tenta realizar o login com usuário problemático e senha válida$/, () => {
	Login.loginComUsuarioProblematicoBDD();
	Login.clicarNoBotaoDeLogin();
});

Then(/^será direcionado para a página de produtos$/, () => {
	Login.assertivaParaVerificarSeEstouNaPaginaDeProdutos();
});

//Cenario 4 - Usuário em branco

When(/^o usuário tenta realizar o login com usuário em branco$/, () => {
	Login.preencherSomenteSenhaValida();
	Login.clicarNoBotaoDeLogin();
});

Then(/^será exibida uma mensagem de erro de usuário não preenchido$/, () => {
	Login.mensagemDeUsuarioNaoPreenchido();
});

//Cenario 5 - Senha em branco

When(/^o usuário tenta realizar o login com senha em branco e usuário preenchido$/, () => {
	Login.preencherSomenteUsuarioValido();
	Login.clicarNoBotaoDeLogin();
});

Then(/^será exibida uma mensagem de erro de senha não preenchida$/, () => {
	Login.mensagemDeSenhaNaoPreenchida();
});

//Cenario 6 - Usuário ou senha inválida

When(/^o usuário tenta realizar o login com senha inválida e usuário válido preenchido$/, () => {
	Login.preencherSomenteUsuarioValido();
	Login.preencherComSenhaInvalidaQualquer();
	Login.clicarNoBotaoDeLogin();
});

Then(/^será exibida uma mensagem de erro de usuário e senha não conferem$/, () => {
	Login.mensagemDeQueUsuarioESenhaNaoConferem();
});


