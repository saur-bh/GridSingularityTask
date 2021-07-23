import { defineStep } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../cucumber-tests/login/loginPage'


defineStep('I want to wait {int} millisec',time=>{

    cy.wait(time)
})


defineStep('I see {string} in the url',url=>{
    cy.url().should('include',url)
})



defineStep('I logged as {string} with password {string} in d3a.io application',(uname,pwd)=>{
    
    LoginPage.visitPage('https://www.d3a.io/login')
    LoginPage.fillEmail(uname)
    LoginPage.fillPassword(pwd)
    LoginPage.clickLogin()

})

defineStep('I visit {string} page in the d3a.io application',URL=>{

    cy.get('.side-nav-layout').should('be.visible')
    LoginPage.visitPage('https://www.d3a.io/'+URL)
    
})