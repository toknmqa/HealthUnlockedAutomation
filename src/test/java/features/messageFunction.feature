Feature: Login From Health Unlocked Pages
	As a registered HU user
	I want to be able to login
	So that I can enter the site
	
  #@regression 
  Scenario: T301 - Checking unread messages tag
    Given I am on logged in and on the Message page 
    When I have unread messages  
    Then I should see a 'new' tag to the left of all unread messages 
  
  #@regression 
  Scenario: T302 - Checking message thread number 
    Given I am on logged in and on the Message page 
    When there is more than one message in a message thread  
    Then I should see the number of messages in parenthesis to the right of the message title
   