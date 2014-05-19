package steps;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import PageObjects.Community;
import PageObjects.Directory;
import PageObjects.Login;
import PageObjects.Index;
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
		// Express the Regexp above with the code you wish you had

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
		home.loginButton(page);
		System.out.println("Clicked Log in");
	}

	@Then("^I should be on the login from (.*)$")
	public void I_should_be_on_the_login_from_page(String page) {
		verifyLogin.loginPage(page);
	}

}
