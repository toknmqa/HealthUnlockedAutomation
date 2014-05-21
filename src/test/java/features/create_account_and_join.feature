Feature: Joining a group
	
	#@regression
	Scenario Outline: Joining a group without having an account
		Given I have started the join process from a community by clicking “Follow Community”
		When I click ‘create account’ on the create account page, enter the following username, <password> and an email address
		Then I should land on the Join page 
		And the first community shown should be the community I joined from 
		And the community should be ‘followed’
		And the remaining communities being shown should be the communities associated with that community (according to the list currently being used in the Aurora join process)
		
		Examples:
		|password|
		|123123|