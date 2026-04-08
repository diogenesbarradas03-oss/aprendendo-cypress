class DashboardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }
        return selectors;
    }

    checkDashboardPage() {
        const selectors = this.selectorsList();
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
            cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}    

export default DashboardPage;