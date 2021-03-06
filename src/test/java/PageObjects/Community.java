package PageObjects;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import helpers.WebPageHelpers;

public class Community extends WebPageHelpers {
	WebDriverWait wait;
	String verifyLocation, communityURL;
	int index;
	private String name;
	
	public String getName(){
		return name;
	}
	private String followCommunityButtonCSS = "button[id*='follow']";
	//Opens all posts page from a community
	
	public void setName(){
		communityURL = getDriver().getCurrentUrl();
		int lastDir = communityURL.lastIndexOf('/');
		name = communityURL.substring(lastDir+1);
	}
	
	public void openPostsQuestions() {

		communityURL = getDriver().getCurrentUrl().toString();
		communityURL = communityURL + "/posts";
		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.cssSelector("span[data-reactid='.0.2.1.1.0.0.0.1.0']")));
		getDriver().findElement(
				By.cssSelector("span[data-reactid='.0.2.1.1.0.0.0.1.0']"))
				.click();

		String postURL = getDriver().getCurrentUrl().toString();
		assertTrue(postURL.equals(communityURL));

	}

	// Opens the Polls page from a community

	public void openPolls() {

		communityURL = getDriver().getCurrentUrl().toString();
		communityURL = communityURL + "/polls";

		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.cssSelector("span[data-reactid='.0.2.1.1.1.0.0.1.0']")));
		getDriver().findElement(
				By.cssSelector("span[data-reactid='.0.2.1.1.1.0.0.1.0']"))
				.click();

		String pollURL = getDriver().getCurrentUrl().toString();

		assertTrue(pollURL.equals(communityURL));

	}

	// Opens the Members page of a community

	public void openMembers() {
		communityURL = getDriver().getCurrentUrl().toString();
		communityURL = communityURL + "/members";

		WebElement member = getDriver().findElement(
				By.cssSelector("span[data-reactid='.0.2.1.1.1.1.0.1.0']"));

		wait.until(ExpectedConditions.visibilityOfElementLocated(By
				.cssSelector("span[data-reactid='.0.2.1.1.1.1.0.1.0']")));
		Actions builder = new Actions(getDriver());
		builder.moveToElement(member).sendKeys(Keys.UP);
		Action ac = builder.build();
		ac.perform();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException iex) {
			iex.toString();
		}
		getDriver().findElement(
				By.cssSelector("span[data-reactid='.0.2.1.1.1.1.0.1.0']"))
				.click();

		String memberURL = getDriver().getCurrentUrl().toString();

		assertTrue(memberURL.equals(communityURL));

	}

	// Checks a random post and confirms the headings match

	public void openIndividualPostQuestion() {
		
		WebElement postTable = getDriver().findElement(
				By.className("panel-body"));
		List<WebElement> arrayPost = postTable.findElements(By.tagName("li"));
		int random = (arrayPost.size() - 1);
		Random rn = new Random();
		if (random == 0 || random > 0) {

			if (random == 0) {
				index = 0;
			} else {
				index = rn.nextInt(random);
			}
			WebElement randomPost = arrayPost.get(index)
					.findElement(By.className("media-heading"))
					.findElement(By.tagName("span"));
			verifyLocation = randomPost.getText();
			Actions builder = new Actions(getDriver());
			builder.moveToElement(randomPost).sendKeys(Keys.UP);
			Action ac = builder.build();
			ac.perform();
			try {
				Thread.sleep(1000);
			} catch (InterruptedException iex) {
				iex.toString();
			}

			randomPost.click();

			wait.until(ExpectedConditions.visibilityOfElementLocated(By
					.cssSelector("h1[data-reactid='.0.3.1.0.2']")));

			String postHeading = getDriver().findElement(
					By.cssSelector("h1[data-reactid='.0.3.1.0.2']")).getText();

			postHeading = postHeading.replace("\n", " ").replace("\r", " ");
			verifyLocation = verifyLocation.replace("\n", " ").replace("\r",
					" ");

			assertTrue(verifyLocation.equals(postHeading));

		} else {
			System.out.println("No posts - checking login from Community page");
		}
	}

	// Opens the correct element from the community page for T101

	public void openCommunityPages(String page) {
		if (page.equals("Posts_Questions")) {
			System.out.println(page);
			openPostsQuestions();
		} else if (page.equals("Polls")) {
			System.out.println(page);
			openPolls();
		} else if (page.equals("Members")) {
			System.out.println(page);
			openMembers();
		} else if (page.equals("Individual_Post_Question")) {
			System.out.println(page);
			openIndividualPostQuestion();
		} else {
			System.out.println(page);
		}

	}
	
	public boolean clickFollowButton(){
		getDriver().findElement(By.cssSelector(followCommunityButtonCSS)).click();
		String dualModalText = getDriver().findElement(By.cssSelector(WebPageHelpers.dualModalCSSRegisterDiv + ">h2")).getText();
		if (dualModalText.equals("Create account"))
			return true;
		return false;
	}
}
