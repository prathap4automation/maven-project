package tests;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
	@RunWith(Cucumber.class)
	@CucumberOptions(features= {
			"src\\test\\resources\\features\\feature1.feature",
			"src\\test\\resources\\features\\feature2.feature"
			},
	plugin= {"pretty","html:target"},
	glue= "",
	monochrome=true)
public class Runner {
	
}
