package PageObjects;

import static org.junit.Assert.assertTrue;
import helpers.SeleniumFactory;
import helpers.WebPageHelpers;

import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Directory extends WebPageHelpers {
	WebDriver driver;
	WebDriverWait wait;
	String verifyLocation;
	int index;

	public Directory() {
		driver = SeleniumFactory.get();
	}

	//Opens a random community page

	public void openCommunity() {

		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.className("avatar-img")));

		WebElement communityTable = driver.findElement(By
				.cssSelector("ul[data-reactid='.0.2.1.1']"));
		List<WebElement> arrayCommunity = communityTable.findElements(By
				.tagName("li"));
		int random = (arrayCommunity.size() - 1);
		Random rn = new Random();

		index = rn.nextInt(random);

		WebElement randomCommunity = arrayCommunity.get(index).findElement(
				By.className("avatar-img"));
		WebElement randomCommunityBody = arrayCommunity.get(index);
		verifyLocation = randomCommunity.getAttribute("src");
		randomCommunity = arrayCommunity.get(index).findElement(
				By.tagName("h4"));
		Actions builder = new Actions(driver);
		builder.moveToElement(randomCommunityBody).sendKeys(Keys.UP);
		Action ac = builder.build();
		ac.perform();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException iex) {
			iex.toString();
		}
		randomCommunity.click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.cssSelector("img[data-reactid='.0.2.1.0.1.0.0.0']")));
		String avatar = driver.findElement(
				By.cssSelector("img[data-reactid='.0.2.1.0.1.0.0.0']"))
				.getAttribute("src");

		assertTrue(verifyLocation.equals(avatar));

	}

}
