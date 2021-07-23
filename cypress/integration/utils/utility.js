


class BaseFunction{

   
    static inputField(fieldName){

        return cy.get(fieldName)
    }

    static clickBtn(fieldName) {
        
        return cy.get(fieldName)
    }

    static cleanupData(){
        cy.visit('https://www.d3a.io/projects')
        cy.get("body").then($body => {
            if ($body.find(".saved-project__cog").length > 0) { 
            
              //you get here only if button is visible
              cy.get(".saved-project__cog").first().click()
              cy.contains("Delete").click()
              cy.contains("I'm sure").click()
            }
          })

        
        
    }
}




export default BaseFunction