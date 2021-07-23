Feature: Login to Application 
    As a valid user 
    I am able to login to d3a.io
    
    As a invalid user
    I am not able to login to d3a.io
   
    Scenario: Valid login
      Given I open login page
      When I fill the email with "saurabh-verma@outlook.com"
      And I fill the password with "Welcome@8"
      And I click on Login button
      And I want to wait 5000 millisec
      And I visit "account" page in the d3a.io application
      And I see "account" in the url
      Then I should see my username "saurabh-verma@outlook.com" in d3a.io
      

   
    
    Scenario: Invalid login
      Given I open login page
      When I fill the email with "invalid@outlook.com"
      And I fill the password with "invalid@8"
      And I click on Login button
      And I want to wait 5000 millisec
      And I see "login" in the url
      Then I should see error in the loginPage

  