package helpers;

import static org.junit.Assert.assertTrue;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class WebPageHelpers {

	private static WebDriver driver = SeleniumFactory.get();
	String verifyLocation;
	public static final String dualModalCSSRegisterDiv = ".col-sm-6.simpleRegisterLogin-register";
	public static WebDriver getDriver(){
		
		return driver;
	}

	public static void openWebPage(String url) {
		// load page through selenium 2.0
		String fullURL = System.getProperty("baseUrl") + url;
		if ((url.contains("homepage"))) {
			fullURL = "https://bg-test.www.ppgdes.com";
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

	//Logs in on the homepage
	
	public void loginButtonHome() {
		
			driver.findElement(By.cssSelector("a[data-reactid='.0.0.1.0']"))
					.click();
			try {
			Thread.sleep(2000);
		} catch (InterruptedException iex) {
			iex.toString();
		}
	}

	//logs in on every other page
	public void loginButtonGlobal() {
		
		driver.findElement(By.cssSelector("a[data-reactid='.0.1.0.0.0']"))
				.click();
	try {
		Thread.sleep(2000);
	} catch (InterruptedException iex) {
		iex.toString();
	}
}

}
