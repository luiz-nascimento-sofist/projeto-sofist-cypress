import Login from '../../support/Pages/Login/index';
import Produto from '../../support/Pages/Produto/index';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


 // 1 - Caminho feliz para compra de produto

Given(/^que o usuário está na página de produto$/, () => {
	Login.acessarSiteDoSwagLabs();
    Login.loginComUsuarioESenhaValidosBDD();
    Login.clicarNoBotaoDeLogin();
});

When(/^o usuário coloca um produto no carrinho$/, () => {
	Produto.adicionarOProdutoNoCarrinho();
});

When(/^procede para fechar a compra$/, () => {
	Produto.procederParaFecharOPedidoInserindoDadosDeEndereco();
});

Then(/^a compra é realizada com sucesso$/, () => {
	Produto.finalizarOPedidoEReceberConfirmacao();
});

//2 - Caminho feliz para a compra do produto utilizando o xpath


Given(/^que o usuário está na página de produto - xpath$/, () => {
	Login.acessarSiteDoSwagLabs();
    Login.loginComUsuarioESenhaValidosBDD();
    Login.clicarNoBotaoDeLogin();
});

When(/^o usuário coloca um produto no carrinho - xpath$/, () => {
	Produto.adicionarOProdutoNoCarrinhoXpath();
});

When(/^procede para fechar a compra - xpath$/, () => {
	Produto.procederParaFecharOPedidoInserindoDadosDeEnderecoXpath();
});

Then(/^a compra é realizada com sucesso - xpath$/, () => {
	Produto.finalizarOPedidoEReceberConfirmacaoXpath();
});



