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

	   