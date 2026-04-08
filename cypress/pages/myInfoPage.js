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

     FillPersonalDetails(firstName, middleName, lastName) {
            cy.get(this.selectorsList().FirstNameField).clear().type(firstName, { delay: 100 })
            cy.get(this.selectorsList().MiddleNameField).clear().type(middleName, { delay: 100 })
            cy.get(this.selectorsList().LastNameField).clear().type(lastName, { delay: 100 })
            
    }

    FillEmployeeDetails(employeeId, otherId, driversLicense, licenseExpiry, birthDate) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId, {delay: 190})
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId, {delay: 150})
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense, {delay: 170})
            cy.get(this.selectorsList().genericDateField).eq(0).clear().type(licenseExpiry, {delay: 160})
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().infoDropdown).eq(0).click()
            cy.get(this.selectorsList().nationalityOption).click()
            cy.get(this.selectorsList().infoDropdown).eq(1).click()
            cy.get(this.selectorsList().maritalOption).click()
            cy.get(this.selectorsList().genericDateField).eq(1).clear().type(birthDate, {delay: 160})
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().genderOption).eq(0).click() 
            cy.get(this.selectorsList().submitButton).eq(0).click()
            cy.get('body').should('contain', 'Successfully Updated')         
    }

    FillCustomDetails() {
            cy.get(this.selectorsList().infoDropdown).eq(2).click()
            cy.get(this.selectorsList().bloodOption).click()
            cy.get(this.selectorsList().testField).eq(0).clear().type('Test Test', {delay: 150})
            // cy.get(this.selectorsList().testField).eq(1).clear().type('The most common blood type in Brazil', {delay: 150})
            cy.get(this.selectorsList().submitButton).eq(1).click({ multiple: true })
            cy.get('.oxd-toast-close').click()
            cy.get('body').should('contain', 'Successfully Saved')
    }

    SaveForm() {
            cy.get(this.selectorsList().submitButton).eq(1).click()
            cy.get('body').should('contain', 'Successfully Saved')
    }
    
}    

export default MyInfoPage;