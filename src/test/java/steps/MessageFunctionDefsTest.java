package steps;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;
import PageObjects.Messages;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MessageFunctionDefsTest {

	private Messages message = new Messages();
	
	@Given("^I am on logged in and on the Message page$")
	public void I_am_on_logged_in_and_on_the_Message_page() {
	    message.isTheMessagePageOpen();
	}

	@When("^I have unread messages$")
	public void I_have_unread_messages() {
	   message.isThereAMessage();
	}

	@Then("^I should see a 'new' tag to the left of all unread messages$")
	public void I_should_see_a_new_tag_to_the_left_of_all_unread_messages() {
	    message.isNewTagDisplayed();
	}

	/** To be implemented.
	@When("^there is more than one message in a message thread$")
	public void there_is_more_than_one_message_in_a_message_thread() {
	   assertTrue(message.isThereMoreThanOneMessages());
	}

	@Then("^I should see the number of messages in parenthesis to the right of the message title$")
	public void I_should_see_the_number_of_messages_in_parenthesis_to_the_right_of_the_message_title() {
	//To be implemented 
	}
	**/

}
