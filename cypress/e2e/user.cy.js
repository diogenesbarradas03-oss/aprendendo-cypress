import UserData from '../fixtures/user-data.json'
describe('OrangeHRM Tests', () => {
  const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectiontitleTopbar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: ".orangehrm-dashboard-grid",
  WrongCredentialAlert: '.oxd-alert',
  MyInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  FirstNameField: "[name='firstName']",
  MiddleNameField: "[name='middleName']",
  LastNameField: "[name='lastName']", 
  genericField: '.oxd-input--active',
  dateCloseButton: '.--close',
  submitButton: '[type="submit"]',
  infoDropdown: '[tabindex="0"]',
  nationalityOption: '.oxd-select-dropdown > :nth-child(27)',
  maritalOption: '.oxd-select-dropdown > :nth-child(2)',
  bloodOption: '.oxd-select-dropdown > :nth-child(6)',
  genderOption: '.oxd-radio-input'
  }

  it.only('User Info Update - Success!', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(UserData.userSuccess.username, { delay: 100 })
    cy.get(selectorsList.passwordField).type(UserData.userSuccess.password, { delay: 100 })
    cy.get(selectorsList.loginButton).click()
    //cy.get('.oxd-input').type('My Info')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.MyInfoButton).click()
    cy.get(selectorsList.FirstNameField).clear().type('Diógenes', { delay: 100 })
    cy.get(selectorsList.MiddleNameField).clear().type('Almeida Santos', { delay: 100 })
    cy.get(selectorsList.LastNameField).clear().type('Barradas', { delay: 100 })
    cy.get(selectorsList.genericField).eq(3).clear().type('003', {delay: 190})
    cy.get(selectorsList.genericField).eq(4).clear().type('D200303', {delay: 150})
    cy.get(selectorsList.genericField).eq(5).clear().type('DI0303', {delay: 170})
    cy.get(selectorsList.genericField).eq(6).clear().type('2033-03-02', {delay: 160})
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.infoDropdown).eq(0).click()
    cy.get(selectorsList.nationalityOption).click()
    cy.get(selectorsList.infoDropdown).eq(1).click()
    cy.get(selectorsList.maritalOption).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('2003-03-02', {delay: 160})
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genderOption).eq(0).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get(selectorsList.infoDropdown).eq(2).click()
    cy.get(selectorsList.bloodOption).click()
    cy.get(selectorsList.genericField).eq(9).clear().type('The most common blood type in Brazil', {delay: 150})
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close')
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