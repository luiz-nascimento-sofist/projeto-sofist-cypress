Feature: Login

    Como usuario, desejo realizar login e ser redirecionado para a pagina de produtos.

    Scenario: Login na plataforma com sucesso:

        Given que o usuário está na página de login
        When o usuário tenta realizar o login com usuário e senha válidos
        Then será direcionado para a página de produtos

    Scenario: Login na plataforma com usuário bloqueado:

        Given que o usuário está na página de login
        When o usuário tenta realizar o login com usuário bloqueado e senha válida
        Then será exibida uma mensagem de erro de usuário bloqueado

    Scenario: Login na plataforma com usuário problemático:

        Given que o usuário está na página de login
        When o usuário tenta realizar o login com usuário problemático e senha válida
        Then será direcionado para a página de produtos

    Scenario: Login na plataforma com usuário em branco:

        Given que o usuário está na página de login
        When o usuário tenta realizar o login com usuário em branco
        Then  será exibida uma mensagem de erro de usuário não preenchido

    Scenario: Login na plataforma com senha em branco e usuário preenchido:

        Given que o usuário está na página de login
        When o usuário tenta realizar o login com senha em branco e usuário preenchido
        Then será exibida uma mensagem de erro de senha não preenchida

    Scenario: Login na plataforma com senha inválida e usuário válido preenchido:

        Given que o usuário está na página de login
        When o usuário tenta realizar o login com senha inválida e usuário válido preenchido
        Then será exibida uma mensagem de erro de usuário e senha não conferem

