package PageObjects;


import static org.junit.Assert.assertTrue;

import java.util.List;

import helpers.WebPageHelpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login extends WebPageHelpers {

	String sCurrentURL;

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
		
		sCurrentURL = getDriver().getCurrentUrl().toString();
		
		
		WebElement wLoginName = getDriver().findElement(By.id("login-email-input"));
		wLoginName.sendKeys("tokeeffe@qaworks.com");
		
		WebElement wPassword = getDriver().findElement(By.id("login-password-input"));
		wPassword.sendKeys("nmqapass");
		
	}
	public void clickLogin (){
		
		WebElement wLogin = getDriver().findElement(By.id("login-submit-button"));
		wLogin.click();
	}
	
	//Verifies the user logs in by checking the alert pop up, the username and that they are still on the current url
	
	public void loginAlert (){
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.className("alert-container")));
		
		WebElement loginAlert = getDriver().findElement(
				By.className("alert-container"));
		
		WebElement wUsername = getDriver().findElement(By.cssSelector("span[data-reactid='.0.1.0.5.0.1']"));
		
		String sUsername = wUsername.getText();
		
		assertTrue(loginAlert.isDisplayed());
		assertTrue(sUsername.equals("tok9"));
		assertTrue(sCurrentURL.equals(getDriver().getCurrentUrl().toString()));
		
	}
	
	//Clicks the Forgotten Password button on the Modal
	
	
	public void clickForgottenPassword(){
		
		WebElement wForgot = getDriver().findElement(By.className("modal-content")).findElement(By.tagName("a"));
		wForgot.click();

	}
	
	//The method log the user out
	public void logoutFromAccount() {
		
		WebElement navBox = getDriver().findElement(
				By.xpath("/html/body/div/div/div/div/div[2]/a"));
		navBox.click();

		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.xpath("/html/body/div/div/div/div/div[2]/ul")));
		
		WebElement navPop = getDriver().findElement(
				By.xpath("/html/body/div/div/div/div/div[2]/ul"));
		navPop.findElement(By.className("icon-cancel")).click();
		
	}
	
	//Clicks the sign up text
	
public void clickSignUp(){
		
		WebElement wModal = getDriver().findElement(By.className("modal-content"));
		List<WebElement> arrayModal = wModal.findElements(By.tagName("p"));
		
		WebElement wSignUp = arrayModal.get(1).findElement(By.tagName("a"));
		wSignUp.click();
			}
}
