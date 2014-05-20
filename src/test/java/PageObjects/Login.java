package PageObjects;


import static org.junit.Assert.assertTrue;
import helpers.WebPageHelpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login extends WebPageHelpers {

	String communityURL;
	String currentURL;
	WebDriverWait wait;

	// verifies the user is on the login page
	// If the user is not on the page an error is generated
	
	public void loginPage(String page) {
		if (page.equals("Homepage")) {
			assertTrue(getDriver().getCurrentUrl().equals(
					"https://bg-test.www.ppgdes.com/login"));
		} else {
			WebElement modal = getDriver().findElement(
					By.className("modal-content"));

			assertTrue(modal.isDisplayed());
		}
	}
	
	//Enters loginDetails in the Modal and logs the user in
	
	public void loginDetails (){
		
		currentURL = getDriver().getCurrentUrl().toString();
		
		
		WebElement loginName = getDriver().findElement(By.id("login-email-input"));
		loginName.sendKeys("tokeeffe@qaworks.com");
		
		WebElement password = getDriver().findElement(By.id("login-password-input"));
		password.sendKeys("nmqapass");
		
		WebElement login = getDriver().findElement(By.id("login-submit-button"));
		login.click();
	}
	
	//Verifies the user logs in by checking the alert pop up, the username and that they are still on the current url
	
	public void loginAlert (){
		
		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.className("alert-container")));
		
		WebElement loginAlert = getDriver().findElement(
				By.className("alert-container"));
		
		WebElement userNameElement = getDriver().findElement(By.cssSelector("span[data-reactid='.0.1.0.5.0.1']"));
		
		String userName = userNameElement.getText();
		
		assertTrue(loginAlert.isDisplayed());
		assertTrue(userName.equals("tok9"));
		assertTrue(currentURL.equals(getDriver().getCurrentUrl().toString()));
		
	}
}
