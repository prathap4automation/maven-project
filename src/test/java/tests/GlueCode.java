package tests;

import java.io.FileInputStream;
import java.util.List;
import java.util.Properties;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DashboradPage;
import pages.LoginPage;

public class GlueCode {
	public static WebDriver driver;
	public WebDriverWait wait;
	public LoginPage lp;
	public DashboradPage dp;
	public Scenario s;
	public Properties props;
	FileInputStream f;
	
	@Before
	public void method1(Scenario s) throws Exception
	{
		this.s=s;
		props = new Properties();
		f=new FileInputStream("E:\\selenium\\way2sms_maven\\src\\test\\resources\\properties\\Property.properties");
		props.load(f);
	}
	
	@Given("^launch site using \"(.*)\"$")
	public void method2(String b) throws Exception
	{
		//open browser for current scenario
		switch(b)
		{
		case "chrome":
			System.setProperty("webdriver.chrome.driver",props.getProperty("chromeDriver"));
			driver=new ChromeDriver();
			break;
		case "firefox":
			System.setProperty("webdriver.gecko.driver", props.getProperty("firefoxDriver"));
			driver = new FirefoxDriver();break;
		case "ie":
			System.setProperty("webdriver.ie.driver", props.getProperty("ieDriver"));
			driver = new InternetExplorerDriver();break;
		case "opera":
			OperaOptions oo=new OperaOptions();
			oo.setBinary("C:\\Program Files\\Opera\\55.0.2994.61\\opera.exe");
			System.setProperty("webdriver.opera.driver", props.getProperty("operaDriver"));
			driver = new OperaDriver(oo);break;
		default:
			System.out.println("Invalid browser");
			System.exit(0);
		}
		//create object for page classes
		lp= new LoginPage(driver);
		dp=new DashboradPage(driver);
		//open site
		driver.get(props.getProperty("baseUrl"));
		//define wait object
		wait = new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.visibilityOf(lp.mbno));
		driver.manage().window().maximize();
	}
	
	@Then("^title contains \"(.*)\"$")
	public void method3(String title)
	{
		wait.until(ExpectedConditions.visibilityOf(lp.mbno));
		String t=driver.getTitle();
		if(t.contains(title)) {
			s.write("Title Test passed");
		}
		else
		{
			this.screenShot("title test failed");
			Assert.fail("title test failed");
		}
	}
	
	@And("^close site$")
	public void method4()
	{
		driver.close();
	}
	
	@When("^enter mobile number as \"(.*)\"$")
	public void fillMbno(String mobile)
	{
		wait.until(ExpectedConditions.visibilityOf(lp.mbno));
		lp.clear(lp.mbno);
		lp.fillMbno(mobile);
	}
	
	@And("^enter password as \"(.*)\"$")
	public void fillPassword(String password)
	{
		wait.until(ExpectedConditions.visibilityOf(lp.pwd));
		lp.clear(lp.pwd);
		lp.fillPwd(password);
	}
	
	@And("^click login$")
	public void clickLogin()
	{
		wait.until(ExpectedConditions.visibilityOf(lp.login));
		lp.clickLogin();
	}
	
	@Then("^validate output for criteria \"(.*)\"")
	public void validateCriteria(String criteria)
	{
		wait.until(temp->((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete"));
		try {
			if(criteria.equals("all_valid")&& dp.currBal.isDisplayed())
				s.write("Test passed for valid data");
			else if(criteria.equals("mbno_blank") && lp.mbno_blank_err.isDisplayed())
				s.write("Test passed for blank mobile number");
			else if(criteria.equals("pwd_blank") && lp.pwd_blank_err.isDisplayed())
				s.write("Test passed for blank password");
			else if(criteria.equals("mbno_invalid") && lp.mbno_invalid_err.isDisplayed())
				s.write("Test passed for invalid mobile number");
			else if(criteria.equals("pwd_invalid") && lp.pwd_invalid_err.isDisplayed())
				s.write("test passed for invalid password");
			else {
				this.screenShot("Login test failed");
				Assert.fail("Login test failed");
			}
		}
		catch(Exception ex) {this.screenShot(ex.getMessage());}
	}
	@When("^do login with valid data$")
	public void validLogin(DataTable dt)
	{
		List<List<String>> l=dt.asLists(String.class);
		lp.clear(lp.mbno);
		lp.fillMbno(l.get(1).get(0));
		lp.clear(lp.pwd);
		lp.fillPwd(l.get(1).get(0));
		lp.clickLogin();
	}
	
	@And("^do logout$")
	public void logout()
	{
		wait.until(temp->((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete"));
		try {
			wait.until(ExpectedConditions.visibilityOf(dp.currBal));
			dp.clickLogout();			
		}
		catch(Exception ex) {this.screenShot(ex.getMessage());}
	}
	
	@Then("^home page will be reopened$")
	public void validateLogout()
	{
		wait.until(temp->((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete"));
		try {
			wait.until(ExpectedConditions.visibilityOf(lp.mbno));
			s.write("Logout test passed");
		}
		catch(Exception ex) {this.screenShot(ex.getMessage());}
	}
	
	public void screenShot(String msg)
	{
		byte ssbytes[]=((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		s.embed(ssbytes, msg);
	}
}
