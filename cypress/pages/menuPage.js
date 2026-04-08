class MenuPage {
    selectorsList() {
        const selectors = {
            MyInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            PerformanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
        }
        return selectors;
    }

    checkMyInfoButton() {
        const selectors = this.selectorsList();
            cy.get(this.selectorsList().MyInfoButton).click()
    }

    acessPerformanceButton() {
        const selectors = this.selectorsList();
            cy.get(this.selectorsList().PerformanceButton).click()
    }
}    

export default MenuPage;