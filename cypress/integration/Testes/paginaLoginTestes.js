/// <reference types ="cypress" />
import Login from '../../support/Pages/Login/index'


describe('Teste da pagina de login', () => {
    describe('Login com', () => {

        beforeEach(() => {
            
            Login.acessarSiteDoSwagLabs();

        });

        it('usuário e senha válidas', () => {
            
            Login.loginComUsuarioComLoginESenhaValidos();
        });

        it('login com usuário bloqueado', () => {
            Login.loginComUsuarioBloqueado();
        });

        it('usuário problemático', () => {

            Login.loginComUsuarioProblematico();

        });

        it('usuário em branco', () => {

            Login.loginComUsuarioEmBranco();
            
        });

        it(' usuário preenchido e senha em branco', () => {

            Login.loginComSenhaEmBranco();

        });

        it(' usuário preenchido e senha inválida', () => {

            Login.usuarioPreenchidoESenhaInvalida();
        });
    });
});