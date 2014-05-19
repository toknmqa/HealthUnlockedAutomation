package helpers;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.apache.tools.ant.taskdefs.Get;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import PageObjects.Community;
import PageObjects.Login;

public class WebPageHelpers {

	private static WebDriver driver = SeleniumFactory.get();
	String verifyLocation;
	
	public static WebDriver getDriver(){
		
		return driver;//delete this comment 
	}

	public static void openWebPage(String url) {
		// load page through selenium 2.0
		String fullURL = System.getProperty("baseUrl") + url;
		if ((url.contains("homepage"))) {
			fullURL = "https://bg-test.www.ppgdes.com/";
		}

		System.out.println("Opening URL: " + fullURL);
		SeleniumFactory.get(fullURL, true);
		// Maximise browser window
	}

	// opens the Directory page
	public void openDirectory() {

		driver.findElement(By.cssSelector("a[data-reactid='.0.0.1.1']"))
				.click();

		WebElement directoryPage = driver.findElement(By
				.cssSelector("h2[data-reactid='.0.2.1.0.0']"));
		verifyLocation = directoryPage.getText();
		assertTrue(verifyLocation.equals("Find and follow communities on the directory!"));

	}

	public void loginButton(String page) {
		if (page.equals("Homepage")) {
			driver.findElement(By.cssSelector("a[data-reactid='.0.0.1.0']"))
					.click();
		} else
			driver.findElement(By.cssSelector("a[data-reactid='.0.1.0.0.0']"))
					.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException iex) {
			iex.toString();
		}
	}
}
