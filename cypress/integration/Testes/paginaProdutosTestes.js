/// <reference types ="cypress" />
/// <reference types = "cypress-xpath" />
import Login from '../../support/Pages/Login/index'
import Produto from '../../support/Pages/Produto/index'


describe('Teste da página de produtos', () => {

    describe('Com usuário válido logado', () => {

        beforeEach(() => {
            Login.acessarSiteDoSwagLabs();
        })

        it('Adicionando um produto no carrinho e fechando a conta', () => {

            Login.loginComUsuarioComLoginESenhaValidos();
            Produto.acessarSiteDeProdutosERealizarUmaCompra();

        })

        it('Adicionando um produto no carrinho e fechando a conta (pelo xpath)', () => {

            Login.loginComUsuarioComLoginESenhaValidos();
            Produto.acessarSiteDeProdutosERealizarUmaCompraPeloXpath();

        })
    })
})