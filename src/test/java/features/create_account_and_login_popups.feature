Feature: Login From Health Unlocked Pages
	As a registered HU user
	I want to be able to login
	So that I can enter the site
	
  @regression 	
  Scenario Outline: T101 - login from HU pages
    Given I am on the HU <page>
    When I click Log in on <page>
    Then I should be on the login from <page>
    
    Examples:
    |page|
    |Homepage|
    |Community_Homepage|
    |Posts_Questions|
    |Polls|
    |Members|
    |Individual_Post_Question|

  @regression 
  Scenario: T102 - login using valid credentials

	Given I enter my valid login credentials
	When I click Log in
	Then The modal disappears and I remain on the same page but now logged in

  #@regression
  Scenario: T103 - Forgotten Password Modal
	Given I’m on the Log in modal
	When I click forgotten your password
	Then The modal turns into a forgot password page
	
  @regression
  Scenario: T104 - signup from Login modal
	Given I’m on the Log in modal
	When I click ‘Sign up’ 
	Then The modal turns into a create account page