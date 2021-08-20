class Produto {


    acessarSiteDeProdutosERealizarUmaCompra() {

        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test=checkout]').click();
        cy.get('[data-test=firstName]').type('Luiz');
        cy.get('[data-test=lastName]').type('Nascimento');
        cy.get('[data-test=postalCode]').type('13070-752');
        cy.get('[data-test=continue]').click();
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light');
        cy.get('[data-test=finish]').click();
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    }

    acessarSiteDeProdutosERealizarUmaCompraPeloXpath() {
        cy.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
        cy.xpath('//*[@class="shopping_cart_link"]').click();
        cy.xpath('//*[@id="checkout"]').click();
        cy.xpath('//*[@id="first-name"]').type('Luiz');
        cy.xpath('//*[@id="last-name"]').type('Nascimento');
        cy.xpath('//*[@id="postal-code"]').type('13070-752');
        cy.xpath('//*[@id="continue"]').click();
        cy.xpath('//*[@class="inventory_item_name"]').contains('Sauce Labs Bike Light');
        cy.xpath('//*[@id="finish"]').click();
        cy.xpath('//*[@class="complete-header"]').should('contain', 'THANK YOU FOR YOUR ORDER');
    }

    adicionarOProdutoNoCarrinho() {
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
        cy.get('.shopping_cart_link').click();
    }
    procederParaFecharOPedidoInserindoDadosDeEndereco() {
        cy.get('[data-test=checkout]').click();
        cy.get('[data-test=firstName]').type('Luiz');
        cy.get('[data-test=lastName]').type('Nascimento');
        cy.get('[data-test=postalCode]').type('13070-752');
        cy.get('[data-test=continue]').click();
    }
    finalizarOPedidoEReceberConfirmacao() {
        cy.get('[data-test=finish]').click();
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
        cy.screenshot('MensagemDeObrigadoPeloPedido');
    }
    adicionarOProdutoNoCarrinhoXpath() {
        cy.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
        cy.xpath('//*[@class="shopping_cart_link"]').click();
    }
    procederParaFecharOPedidoInserindoDadosDeEnderecoXpath() {
        cy.xpath('//*[@id="checkout"]').click();
        cy.xpath('//*[@id="first-name"]').type('Luiz');
        cy.xpath('//*[@id="last-name"]').type('Nascimento');
        cy.xpath('//*[@id="postal-code"]').type('13070-752');
        cy.xpath('//*[@id="continue"]').click();
    }
    finalizarOPedidoEReceberConfirmacaoXpath() {
        cy.xpath('//*[@id="finish"]').click();
        cy.xpath('//*[@class="complete-header"]').should('contain', 'THANK YOU FOR YOUR ORDER');
        cy.screenshot('MensagemDeObrigadoPeloPedidoXpath');
    }
}

export default new Produto();