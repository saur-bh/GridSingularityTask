# Grid Singularity d3a application testing using cypress and cucumber (Gherkin syntax) -RunBook

The test was conducted on web browser ( Chrome v91  and Electron v89)

## Pre-Condition 
Install node.js and npm on the system
* Windows https://phoenixnap.com/kb/install-node-js-npm-on-windows
* Mac https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681
* Linux(ubantu) https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

## Tech Stack 
- javaScript 
- cypress
- cypress-cucumber-preprocessor 

## UseCase which are automated 
1. Login testcase
2. Create a Project
3. Create a simulation

## Demo 
pasteyouttubeLink

## Setup

* Must have NodeJS and NPM installed (https://nodejs.org/en/)
* Install dependencies by running `npm install`

## Running Tests

* To run all of the tests, run `npm run cy:open` - headed Mode
* To run individual tests, run `npm run cy:tests --glob 'cypress/integration/**/login.feature'`

## Enhancement
  * Integration with CI tool i.e. Jenkins
  * graphQL call for setup and tearDown 
