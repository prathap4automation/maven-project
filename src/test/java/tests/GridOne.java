package tests;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.BeforeTest;

public class GridOne {
		WebDriver driver;
		String baseUrl, nodeUrl;
		
		@BeforeTest
		public void setUp() throws Exception
		{
			baseUrl="";
			nodeUrl="";
		}

}
