package PageObjects;

import helpers.SeleniumFactory;
import helpers.WebPageHelpers;

import org.openqa.selenium.WebDriver;

public class Index extends WebPageHelpers {
	
	
	// Opens the Homepage if it isn't already open
		public void openHomepage() {
			if (getDriver().getCurrentUrl().equals("https://bg-test.www.ppgdes.com/")) {
				System.out.println("This is the Homepage");
			} else {
				WebPageHelpers.openWebPage("homepage");
			}
			try {
				Thread.sleep(1000);
			} catch (InterruptedException iex) {
				iex.toString();
			}
		}
		
		public void uselessMethod(){
			
			//This method is useless
		}
	
}
