


const PORJECTNAME ='#input-field-name'
const COMPAREBTN = '.button--pink'
const NEWPROJECTBTN ='.button--accent'
const ADDPROJECT =''

class ProjectPage{

   
    static clickBtn(btn_name){
        
        cy.contains(btn_name, {matchCase: false }).click()
    }

    static fillPorjectName(prjectName){

        cy.get(PORJECTNAME).type(prjectName)
    }

    static validatePorjectCreated(projectName){
        cy.wait(2000)
        cy.get('.saved-project__headline__name__text').first().should('have.text', projectName)

    }

    static createDefaultSimulation(projectName){

        cy.get('.saved-project__headline__name__text').first().click()
       
        cy.get('.configurations > .button > .button__label').click()
        cy.get('.icon-arrow_next').click()
        cy.wait(3000)
        cy.visit('https://www.d3a.io/projects')
        

       
    }

    static validateSimulation(simulationName, projectName){
        
        
        cy.get('.saved-project__headline__name__text').first().click()
        cy.get('.saved-config--pct-width').contains(simulationName).should('have.text',simulationName)

    }



}

export default ProjectPage