package tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"@target\\ftest.txt"},
		plugin= {"pretty","html:target\\ftest","rerun:target\\ftest.txt"},
		glue="",
		monochrome=true
		)
public class Rerun {}
