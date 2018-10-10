package tests;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(features= {
			"src\\test\\resources\\features\\feature1.feature",
			"src\\test\\resources\\features\\feature2.feature"
			},
	plugin= {"pretty","html:target","rerun:target\\ftest.txt"},//For report generation
	glue= "",//To glue code file names(optional)
	tags= {},//To run specified test only which is mentioned in feature files ex: like smoke test
	monochrome=true)
public class Runner {}
