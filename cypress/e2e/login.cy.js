import UserData from '../fixtures/user-data.json'
describe('OrangeHRM Tests', () => {
  const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectiontitleTopbar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: ".orangehrm-dashboard-grid",
  WrongCredentialAlert: '.oxd-alert' 
  }

  it('Login - Success!', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(UserData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    //cy.get('.oxd-input').type('My Info')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
   it('Login - Failed!', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.userFailed.username)
    cy.get(selectorsList.passwordField).type(UserData.userFailed.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCredentialAlert)
    //cy.get('.oxd-input').type('My Info')
  })
})