class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            WrongCredentialAlert: '.oxd-alert'
        }
        return selectors;
    }

    AcessLoginPage() {
        cy.visit('/auth/login')
    }

    LoginWithCredentials(username, password) {
        const selectors = this.selectorsList();
            cy.get(this.selectorsList().usernameField).type(username, { delay: 100 })
            cy.get(this.selectorsList().passwordField).type(password, { delay: 100 })
            cy.get(this.selectorsList().loginButton).click()
    }

    CheckWrongCredentialAlert() {
        const selectors = this.selectorsList();
            cy.get(this.selectorsList().WrongCredentialAlert).should('be.visible')
    }
}    

export default LoginPage;