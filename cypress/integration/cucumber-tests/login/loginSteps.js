import { Given, When,Then} from 'cypress-cucumber-preprocessor/steps'

import LoginPage from './loginPage'

Given('I open login page',() =>{

    LoginPage.visitPage('https://www.d3a.io/login')


})


When('I fill the email with {string}',email=>{
    LoginPage.fillEmail(email)
})

When('I fill the password with {string}',password=>{
    LoginPage.fillPassword(password)
})

When('I click on Login button',()=>{
    LoginPage.clickLogin()
})


    

Then('I should see error in the loginPage',()=>{

    cy.get('.GraphQLErrorDisplay__error-msg').should('contain.text','Please, enter valid credentials')

})

Then('I should see my username {string} in d3a.io',username=>{

    cy.get('.username').should('contain.text',username)
})

