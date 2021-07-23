
import Base from '../../utils/utility'
const EMAIL_INPUT = '#email'
const PASSWORD_INPUT = '#password'
const LOGIN_BTN = '.button--accent'


class LoginPage{

    static visitPage(url){
        
        cy.visit(url)
    }

    static fillEmail(email){
        
        Base.inputField(EMAIL_INPUT).type(email)
    }

    static fillPassword(pwd){
        Base.inputField(PASSWORD_INPUT).type(pwd)
    }

    static clickLogin(){
        Base.clickBtn(LOGIN_BTN).click()
    }



}

export default LoginPage