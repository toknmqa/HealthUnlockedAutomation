package PageObjects;

import java.io.File;
import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import helpers.SeleniumFactory;
import helpers.WebPageHelpers;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login extends WebPageHelpers {

	String communityURL;
	public static boolean loginURL;
	WebDriverWait wait;

	// verifies the user is on the login page and if not opens it
	public void loginPage(String page) {
		if (page.equals("Homepage")) {
			assertTrue(getDriver().getCurrentUrl().equals(
					"https://healthunlocked.com/!bg"));
			}else {
			WebElement modal = getDriver()
					.findElement(By.className("modal-content"));
			
			assertTrue(modal.isDisplayed());		}
	}
}
