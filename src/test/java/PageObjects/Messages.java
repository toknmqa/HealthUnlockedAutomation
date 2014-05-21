package PageObjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import helpers.SeleniumFactory;
import helpers.WebPageHelpers;

public class Messages extends WebPageHelpers {

	private Login verifyLogin = new Login();
	private Index home = new Index();
	WebDriverWait wait;
	
	
	// This method login to user account from the Home page
	// Then it navigates from the Login Page to the Message page
	private void loginToMessagePage() {
		
		home.openHomepage();
		home.loginButtonHome();
		verifyLogin.loginDetails();
		verifyLogin.clickLogin();

		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.xpath("/html/body/div/div/div/div/div[2]/a")));

		WebElement navBox = getDriver().findElement(
				By.xpath("/html/body/div/div/div/div/div[2]/a"));
		navBox.click();

		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.xpath("/html/body/div/div/div/div/div[2]/ul")));

		WebElement navPop = getDriver().findElement(
				By.xpath("/html/body/div/div/div/div/div[2]/ul"));
		navPop.findElement(By.className("icon-mail")).click();

	}

	// The method check if the Message page is open
	public void isTheMessagePageOpen() {

		loginToMessagePage();
		assertTrue(getDriver().getCurrentUrl().toString()
				.equals("https://bg-test.www.ppgdes.com/messages"));
		System.out.println("User logged in and Message page opened");
	}

	// The method check if there is a message appeared in the message box
	public void isThereAMessage() {

		WebElement messBox = getDriver()
				.findElement(By.className("media-list"));

		wait = new WebDriverWait(getDriver(), 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.className("media")));

		assertTrue(messBox.findElement(By.className("media")).isDisplayed());
		System.out.println("Message box is not empty");
	}

	// The method check for the 'New' tag that appeared on the unread messages
	public void isNewTagDisplayed() {

		WebElement messBox = getDriver()
				.findElement(By.className("media-list"));

		WebElement newestMessage = messBox.findElement(By
				.xpath("/html/body/div/div/div[2]/div/ul/span/li"));
		WebElement newNotice = newestMessage.findElement(By
				.className("media-heading"));

		assertTrue(newNotice.findElement(By.className("badge")).isDisplayed());
		System.out.println("New message displayed 'New' tag");
	}

	// The method check if there are a second message in the message box
	public boolean isThereMoreThanOneMessages() {

		WebElement mesBox = getDriver().findElement(
				By.xpath("/html/body/div/div/div[2]/div/ul/span"));

		return mesBox.findElements(
				By.xpath("/html/body/div/div/div[2]/div/ul/span/li[2]")).size() != 0;
	}

}
