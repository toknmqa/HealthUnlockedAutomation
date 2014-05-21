package steps;

import PageObjects.Community;
import PageObjects.Directory;
import PageObjects.ForgottenPassword;
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
	private ForgottenPassword pass = new ForgottenPassword();

	@Given("^I am on the HU (.*)$")
	public void I_am_on_the_HU_page(String page) throws Throwable {

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
	public void I_click_Log_in_on_page(String page) throws Throwable {

		if (page.equals("Homepage")) {
			home.loginButtonHome();
		} else
			home.loginButtonGlobal();
	}

	@Then("^I should be on the login from (.*)$")
	public void I_should_be_on_the_login_from_page(String page)
			throws Throwable {
		verifyLogin.loginPage(page);
	}

	@Given("I enter my valid login credentials$")
	public void I_enter_my_valid_login_credentials() throws Throwable {
		home.openHomepage();
		home.openDirectory();
		home.loginButtonGlobal();
		verifyLogin.loginDetails();
	}

	@When("I click Log in$")
	public void I_click_log_in() throws Throwable {
		verifyLogin.clickLogin();
	}

	@Then("The modal disappears and I remain on the same page but now logged in$")
	public void The_modal_disappears_and_I_remain_on_the_same_page_but_now_logged_in()
			throws Throwable {
		verifyLogin.loginAlert();
		verifyLogin.logoutFromAccount();
	}

	@Given("^I’m on the Log in modal$")
	public void I_m_on_the_Log_in_modal() {

		home.openHomepage();
		home.openDirectory();
		home.loginButtonGlobal();
	}

	@When("^I click forgotten your password$")
	public void I_click_forgotten_your_password() {
		
		verifyLogin.clickForgottenPassword();
	}

	@Then("^The modal turns into a forgot password page$")
	public void The_modal_turns_into_a_forgot_password_page()  {

		pass.forgottenPasswordPage();
	}
}