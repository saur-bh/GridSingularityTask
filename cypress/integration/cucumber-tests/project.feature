Feature: Create a Project 
    As a valid user 
    I am able to create project 
    and its listed in project list

    Background:
    Given I logged as "saurabh-verma@outlook.com" with password "Welcome@8" in d3a.io application
    And I visit "projects" page in the d3a.io application
    And I see "projects" in the url
    And I delete if already project with name "TestingProject"
    Scenario: Validate that a logged in user is able to create a project 
        Given I click on "NEW PROJECT" button 
        And I fill the name with "TestingProject"
        And I click on "Add" button
        Then I am able to create Project with name "TestingProject"
    


     Scenario: Validate that a logged in user can create a simulation
        Given I click on "NEW PROJECT" button 
        And I fill the name with "TestingProject"
        And I click on "Add" button
        And I am able to create Project with name "TestingProject"
        And I create New Simulation with default in "TestingProject"
        Then I see "default simulation" is listed in "TestingProject" project