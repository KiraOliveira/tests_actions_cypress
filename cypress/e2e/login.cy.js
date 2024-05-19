import loginPages from "../support/pages/loginPages"

describe('Login', () => {

  it('Screen Elements', () => {
    cy.login()
    loginPages.screenElements();
  })

  it('Required User', ()=> {
      cy.login(null, 'teste')
      loginPages.userRequired();
  })

  it ('Required Password', ()=> {
      cy.login('qa', null)
      loginPages.passwordRequired();
  })

  it('User not exist', () => {
      cy.login('teste', 'teste')
      loginPages.userNotExist();
  })

  it('Password Wrong', () => {
      cy.login('qa', 'teste')
      loginPages.passwordWrong();
  })

  it('Sucess Login', () => {
      cy.login('qa', 'xperience')
      loginPages.loginSucess();
  })
})