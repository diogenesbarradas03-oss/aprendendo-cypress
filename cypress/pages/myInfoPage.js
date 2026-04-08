class MyInfoPage {
    selectorsList() {
        const selectors = { 
            // MyInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            FirstNameField: "[name='firstName']",
            MiddleNameField: "[name='middleName']",
            LastNameField: "[name='lastName']", 
            genericField: '.oxd-input--active',
            genericDateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: '.--close',
            submitButton: '[type="submit"]',
            infoDropdown: '[tabindex="0"]',
            nationalityOption: '.oxd-select-dropdown > :nth-child(27)',
            maritalOption: '.oxd-select-dropdown > :nth-child(2)',
            bloodOption: '.oxd-select-dropdown > :nth-child(6)',
            testField: "[options='']",
            genderOption: '.oxd-radio-input'
        }
        return selectors;
    }

    PersonalDetails() {
            // cy.get(this.selectorsList().MyInfoButton).click()
            cy.get(this.selectorsList().FirstNameField).clear().type('Diógenes', { delay: 100 })
            cy.get(this.selectorsList().MiddleNameField).clear().type('Almeida Santos', { delay: 100 })
            cy.get(this.selectorsList().LastNameField).clear().type('Barradas', { delay: 100 })
            cy.get(this.selectorsList().genericField).eq(3).clear().type('003', {delay: 190})
            cy.get(this.selectorsList().genericField).eq(4).clear().type('D200303', {delay: 150})
            cy.get(this.selectorsList().genericField).eq(5).clear().type('DI0303', {delay: 170})
            cy.get(this.selectorsList().genericField).eq(6).clear().type('003', {delay: 190})
            cy.get(this.selectorsList().genericDateField).eq(0).clear().type('2033-03-02', {delay: 160})
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().infoDropdown).eq(0).click()
            cy.get(this.selectorsList().nationalityOption).click()
            cy.get(this.selectorsList().infoDropdown).eq(1).click()
            cy.get(this.selectorsList().maritalOption).click()
            cy.get(this.selectorsList().genericDateField).eq(1).clear().type('2003-03-02', {delay: 160})
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().genderOption).eq(0).click()
            cy.get(this.selectorsList().submitButton).eq(0).click()
            cy.get(this.selectorsList().infoDropdown).eq(2).click()
            cy.get(this.selectorsList().bloodOption).click()
            cy.get(this.selectorsList().testField).clear().type('The most common blood type in Brazil', {delay: 150})
            cy.get(this.selectorsList().submitButton).eq(1).click()
            cy.get('body').should('contain', 'Successfully Saved')
            cy.get('.oxd-toast-close')
    }
}    

export default MyInfoPage;