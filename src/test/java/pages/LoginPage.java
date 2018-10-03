package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
	WebDriver driver;
	
	//Locators of lauch page
	@FindBy(name="mobileNo")
	public WebElement mbno;
	
	@FindBy(name="password")
	public WebElement pwd;
	
	@FindBy(xpath="(//button[contains(text(),'Login')])[1]")
	public WebElement login;
	
	@FindBy(xpath="//b[text()='Enter your mobile number']")
	public WebElement mbno_blank_err;
	
	@FindBy(xpath="(//b[text()='Enter password'])[1]")
	public WebElement pwd_blank_err;
	
	@FindBy(xpath="//b[contains(text(),'Try Again')]")
	public WebElement mbno_invalid_err;
	public WebElement pwd_invalid_err;
	
	//create constructor
	public LoginPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	//operational methods
	public void clear(WebElement e)
	{
		e.clear();
	}
	
	public void fillMbno(String x)
	{	mbno.sendKeys(x);	}
	
	public void fillPwd(String x)
	{	pwd.sendKeys(x);	}
	
	public void clickLogin()
	{	login.click();	}
	
	
}
