import { Given, When,Then,Before,After} from 'cypress-cucumber-preprocessor/steps'
import BaseFunction from '../../utils/utility'


import ProjectPage from './projectPage'


When('I click on {string} button',(btnName)=>{
    ProjectPage.clickBtn(btnName)
})

When('I fill the name with {string}',prjectName=>{

    ProjectPage.fillPorjectName(prjectName)

})

When('I delete if already project with name {string}', prjectName=>{

    BaseFunction.cleanupData()

})

When('I create New Simulation with default in {string}',pname=>{

    ProjectPage.createDefaultSimulation(pname)
})


Then('I am able to create Project with name {string}',prjectName=>{

    ProjectPage.validatePorjectCreated(prjectName)

})


Then('I see {string} is listed in {string} project',(simulationName , prjectName)=>{

    ProjectPage.validateSimulation(simulationName, prjectName)

})


After( ()=>{


    BaseFunction.cleanupData()
})

