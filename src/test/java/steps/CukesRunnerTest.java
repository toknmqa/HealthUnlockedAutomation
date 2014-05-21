
package steps;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@Cucumber.Options(
features = {
		//"src/test/java/features"
		"src/test/java/features/create_account_and_join.feature"
		},
//glue = {"src/test/java/steps/CreateAccountAndLoginPopupsDefs.java"},
tags={"@regression"}
			)
	public class CukesRunnerTest {	

	}