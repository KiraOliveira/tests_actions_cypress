import elementsLogin from "../elementsScreen/elementsLogin";

class usersLogin {

    screenElements() {
        cy.get(elementsLogin.header).should('be.visible')
        cy.get(elementsLogin.logo).should('exist').and('be.visible')
        cy.get(elementsLogin.titleScreen).should('exist').and('be.visible').and('have.text', 'Login')
        cy.get(elementsLogin.fieldUser).should('exist').and('be.visible').and('have.text', '')
        cy.get(elementsLogin.fieldPassword).should('exist').and('be.visible').and('have.text', '')
        cy.get(elementsLogin.buttonEnter).should('exist').and('be.visible').and('have.text', 'Entrar')

    }

    userRequired(){
        cy.get(elementsLogin.message.alertError).should('exist').and('be.visible')
        cy.get(elementsLogin.message.textError).should('exist').and('be.visible').and('have.text', 'Informe o seu nome de usuário!')

    }
    passwordRequired() {
        cy.get(elementsLogin.message.alertError).should('exist').and('be.visible')
        cy.get(elementsLogin.message.textError).should('exist').and('be.visible').and('have.text', 'Informe a sua senha secreta!')

    }
    userNotExist(){
        cy.get(elementsLogin.message.alertError).should('exist').and('be.visible')
        cy.get(elementsLogin.message.textError).should('exist').and('be.visible').and('have.text', 'Oops! Credenciais inválidas :(')

    }
    passwordWrong() {
        cy.get(elementsLogin.message.alertError).should('exist').and('be.visible')
        cy.get(elementsLogin.message.textError).should('exist').and('be.visible').and('have.text', 'Oops! Credenciais inválidas :(')

    }
    loginSucess() {
        cy.get(elementsLogin.message.sucessLoginModal).should('exist').and('be.visible')
        cy.get(elementsLogin.message.textSucess).should('exist').and('be.visible').and('contain.text', 'Tudo certo!')
        cy.get(elementsLogin.message.modalContent).should('have.text', 'Suas credenciais são válidas :)')
        cy.get(elementsLogin.message.buttonSucess).should('exist').and('be.visible').and('contain.text', 'Ok')

    }
}


export default new usersLogin();