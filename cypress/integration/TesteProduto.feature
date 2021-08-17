Feature: Produto

    Como usuario, realizo login no site Swag Labs, e sou direcionado para a pagina de Produtos.
    Na pagina de produtos, eu faço uma compra generica e procedo para finalizar a compra.
    Verifico se a compra foi efetuada.

    Scenario: Faço uma compra no site e procedo para o checkout, finalizo a compra com sucesso.
        
        Given que o usuário está na página de produto
        When o usuário coloca um produto no carrinho
        And procede para fechar a compra
        Then a compra é realizada com sucesso

    Scenario: Faço uma compra no site e procedo para o checkout, finalizo a compra com sucesso utilizando o xpath.
        Given que o usuário está na página de produto - xpath
        When o usuário coloca um produto no carrinho - xpath
        And procede para fechar a compra - xpath
        Then a compra é realizada com sucesso - xpath

