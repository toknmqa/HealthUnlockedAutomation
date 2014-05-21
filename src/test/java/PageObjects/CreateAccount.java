package PageObjects;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.HashMap;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import helpers.Address;
import helpers.WebPageHelpers;

public class CreateAccount extends WebPageHelpers{
	
	
	public CreateAccount(){
		// Create a new user
		user = newUserGenerator();
		wait = new WebDriverWait(getDriver(), 10);
	}
	
	//Wait Class
	WebDriverWait wait;

	//User Details
	private HashMap<String,String> user;
	
	// CSS Selectors required to create an account
	String emailInputCSS = "#simpleRegister-email-input";
	String usernameInputCSS = "#simpleRegister-username-input";
	String passwordInputCSS = "#simpleRegister-password-input";
	String createAnAccountButtonCSS = "#simpleRegister-submit-button";
	String confirmPasswordCSS = "#register-cpassword-input";
	
	String DOBYearSelector = "#register-birthYear-input";
	String FemaleGenderSelector = "#register-genderFemale-input";
	String SubmitButtonSelector = "#register-submit-button";
	String registerEmailInputCSS = "#register-email-input";
	String registerUsernameInputCSS = "#register-username-input";
	String registerPasswordInputCSS = "#register-password-input";
	
	public void fillInModal(){
		
		
		//Insert email address in the modal
		WebElement element = getDriver().findElement(By.cssSelector(emailInputCSS));
		element.sendKeys(user.get("email"));
		
		//Insert username in the modal
		element = getDriver().findElement(By.cssSelector(usernameInputCSS));
		element.sendKeys(user.get("username"));
		
		// Insert password in the modal
		element = getDriver().findElement(By.cssSelector(passwordInputCSS));
		element.sendKeys(user.get("password"));
		
		// Click the create account button on the modal
		element = getDriver().findElement(By.cssSelector(createAnAccountButtonCSS));
		element.click();
	}

	public void fillSignInPage() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(registerUsernameInputCSS)));
		
		//Verify details are correct
		WebElement element = getDriver().findElement(By.cssSelector(registerUsernameInputCSS));
		assertThat(getTextFieldInput(element), is(equalTo(user.get("username"))));
		element = getDriver().findElement(By.cssSelector(registerEmailInputCSS));
		assertThat(getTextFieldInput(element), is(equalTo(user.get("email"))));
		element = getDriver().findElement(By.cssSelector(registerPasswordInputCSS));
		assertThat(getTextFieldInput(element), is(equalTo(user.get("password"))));
		
		//Confirm password
		element = getDriver().findElement(By.cssSelector(confirmPasswordCSS));
		element.sendKeys(user.get("password"));
		
		//Change Date of Birth year so form can be submitted
		element = getDriver().findElement(By.cssSelector(DOBYearSelector));
		Select year = new Select(element);
		year.selectByVisibleText("1984");
		
		//Select Gender
		element = getDriver().findElement(By.cssSelector(FemaleGenderSelector));
		element.click();
		
		//Submit form
		element = getDriver().findElement(By.cssSelector(SubmitButtonSelector));
		element.click();
		System.out.println("lol");
	}

	public String getTextFieldInput(WebElement element){
		return element.getAttribute("value");
	}
	/*** Generate a new user, using the number stored in the 'User' file
	as a base, write an incremented value to the 'User' file
	-----
	Enhancement Suggestion: Store users that have been created**/
	public static HashMap<String,String> newUserGenerator(){
		 String file = "src/test/resources/Users";
		 Path path = Paths.get(file);
		 byte[] fileArray=null;
		 try {
			fileArray = Files.readAllBytes(path);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 String num = new String(fileArray);
		 System.out.println(Arrays.toString(fileArray));
		 num.trim();
		 String nextNum = Integer.toString(Integer.parseInt(num)+1);
		fileArray = nextNum.getBytes();
		
		 try {
			Files.write(path, fileArray);
		} catch (IOException e) {
			System.out.println("Could not write integer to file");
			e.printStackTrace();
		}

		 HashMap<String, String> user = new HashMap<String, String>();
		 user.put("username","test"+num); 
		 user.put("password","password");
		 user.put("email", "test"+num+"@test.com");
		 return user;
	}
	
	//Verifies the user is on the Create Account page
	
	public void verifyCreateAccount(){
		
		WebElement wHeading = getDriver().findElement(
				By.cssSelector("h1[data-reactid='.0.1.1.0.0']"));
		
		String sHeading = wHeading.getText();
		
		assertTrue(sHeading.equals("Create your HealthUnlocked account"));
		
	}
}
