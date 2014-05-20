package steps;

import PageObjects.Community;
import PageObjects.Directory;
import PageObjects.Index;
import PageObjects.Login;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAccountAndLoginPopupsDefsTest {

	private Login verifyLogin = new Login();
	private Index home = new Index();
	private Community com = new Community();
	private Directory dir = new Directory();

	@Given("^I am on the HU (.*)$")
	public void I_am_on_the_HU_page(String page) {

		home.openHomepage();

		if (!(page.contentEquals("Homepage"))) {
			home.openDirectory();
			if (!(page.contentEquals("Community_Homepage"))) {
				dir.openCommunity();
			} else {
			}
		} else {
		}

		com.openCommunityPages(page);

	}

	@When("^I click Log in on (.*)$")
	public void I_click_Log_in_on_page(String page) {
		
		if (page.equals("Homepage")){
		home.loginButtonHome();
	}else
		home.loginButtonGlobal();}

	@Then("^I should be on the login from (.*)$")
	public void I_should_be_on_the_login_from_page(String page) {
		verifyLogin.loginPage(page);
	}


	@Given ("I enter my valid login credentials")
	public void I_enter_my_valid_login_credentials(){
		home.openHomepage();
		home.openDirectory();
		home.loginButtonGlobal();
	}
	
	@When ("I click Log in")
	public void I_click_log_in(){
		verifyLogin.loginDetails();
		
	}
	
	@Then ("The modal disappears and I remain on the same page but now logged in")
	public void The_modal_disappears_and_I_remain_on_the_same_page_but_now_logged_in(){
		verifyLogin.loginAlert();
	}
}