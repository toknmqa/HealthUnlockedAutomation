package PageObjects;


import static org.junit.Assert.assertTrue;
import helpers.WebPageHelpers;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login extends WebPageHelpers {

	String communityURL;
	public static boolean loginURL;
	WebDriverWait wait;

	// verifies the user is on the login page
	// If the user is not on the page an error is generated
	
	public void loginPage(String page) {
		if (page.equals("Homepage")) {
			assertTrue(getDriver().getCurrentUrl().equals(
					"https://healthunlocked.com/!bg"));
		} else {
			WebElement modal = getDriver().findElement(
					By.className("modal-content"));

			assertTrue(modal.isDisplayed());
		}
	}
}
