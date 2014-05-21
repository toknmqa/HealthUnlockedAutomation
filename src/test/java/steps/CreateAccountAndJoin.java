package steps;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;

import helpers.Address;
import helpers.WebPageHelpers;
import PageObjects.Community;
import PageObjects.CreateAccount;
import PageObjects.Directory;
import PageObjects.Index;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CreateAccountAndJoin {

	private WebDriver driver = WebPageHelpers.getDriver();
	private Community community = new Community();
	private Directory directory = new Directory();
	private Index home = new Index();
	private CreateAccount createAccount = new CreateAccount();

	
@Given("^I have started the join process from a community by clicking “Follow Community”$")
public void I_have_started_the_join_process_from_a_community_by_clicking_Follow_Community() throws Throwable {
    home.openHomepage();
    home.openDirectory();
    directory.openCommunity();
    // Store the name of the community, this will be used for verification
    // later
    community.setName(); 
    boolean createAccountModalOpened = community.clickFollowButton();
    assertTrue(createAccountModalOpened);
}

@When("^I click ‘create account’ on the create account page, enter the following username, (\\d+) and an email address$")
public void I_click_create_account_on_the_create_account_page_enter_the_following_username_and_an_email_address(int arg1) throws Throwable {
    // Express the Regexp above with the code you wish you had
	createAccount.fillInModal();
	assertThat(driver.getCurrentUrl(), containsString("signup/"+community.getName())); // need to update this so that it gets the exact link
	createAccount.fillSignInPage();
	
}

@Then("^I should land on the Join page$")
public void I_should_land_on_the_Join_page() throws Throwable {
    // Express the Regexp above with the code you wish you had
	community.waitForPageToLoad(createAccount.greenBoxCSSSelector);
	assertThat(driver.getCurrentUrl(), is(equalTo(Address.HOMEPAGE+
			"/join/"+community.getName())));// Get the community name
}

@Then("^the first community shown should be the community I joined from$")
public void the_first_community_shown_should_be_the_community_I_joined_from() throws Throwable {
    // Express the Regexp above with the code you wish you had
    throw new PendingException();
}

@Then("^the community should be ‘followed’$")
public void the_community_should_be_followed() throws Throwable {
    // Express the Regexp above with the code you wish you had
    throw new PendingException();
}

@Then("^the remaining communities being shown should be the communities associated with that community \\(according to the list currently being used in the Aurora join process\\)$")
public void the_remaining_communities_being_shown_should_be_the_communities_associated_with_that_community_according_to_the_list_currently_being_used_in_the_Aurora_join_process() throws Throwable {
    // Express the Regexp above with the code you wish you had
    throw new PendingException();
}


}
