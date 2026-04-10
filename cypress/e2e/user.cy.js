import UserData from '../fixtures/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('OrangeHRM Tests', () => {
  const selectorsList = {
  dashboardGrid: ".orangehrm-dashboard-grid",
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

  it('User Info Update - Success!', () => {
    loginPage.AcessLoginPage()
    loginPage.LoginWithCredentials(UserData.userSuccess.username, UserData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    // menuPage.acessPerformanceButton()
    menuPage.checkMyInfoButton()
    myInfoPage.FillPersonalDetails(chance.first(), chance.name({ middle: true }), chance.last())
    myInfoPage.FillEmployeeDetails(chance.natural({ min: 1000000000, max: 9999999999 }), (chance.natural({ min: 1000000, max: 9999999 }), (chance.natural({ min: 100000000, max: 999999999 }), '2033-03-02', '2003-03-02')))
    myInfoPage.FillCustomDetails()  
    myInfoPage.SaveForm() 
  })

})