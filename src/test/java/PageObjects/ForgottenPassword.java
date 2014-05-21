package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertTrue;
import helpers.WebPageHelpers;



public class ForgottenPassword extends WebPageHelpers {
	
	WebDriverWait wait;
	
	
	// Waits for the Header to load
	// Verifies it is the correct header
	
	public void forgottenPasswordPage(){
		
		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("h1[data-reactid='.0.2.1.0.0']")));
		
		WebElement wHeading = getDriver().findElement(By.cssSelector("h1[data-reactid='.0.2.1.0.0']"));
		String sHeading = wHeading.getText();
		
		assertTrue(sHeading.equals("Forgot your password?"));
		
	}

}
