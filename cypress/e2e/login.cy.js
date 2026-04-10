import UserData from '../fixtures/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login OrangeHRM Tests', () => {

   it('Login - Failed!', () => {
    loginPage.AcessLoginPage()
    loginPage.LoginWithCredentials(UserData.userFailed.username, UserData.userFailed.password)
    loginPage.CheckWrongCredentialAlert()
  })

  it('Login - Success!', () => {
    loginPage.AcessLoginPage()
    loginPage.LoginWithCredentials(UserData.userSuccess.username, UserData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })

})