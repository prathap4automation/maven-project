package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashboradPage {
	public WebDriver driver;
	
	//locators
	@FindBy(xpath="(//span[text()='Current Balance'])[2]")
	public WebElement currBal;
	
	@FindBy(xpath="//a[@class='logout']/i")
	public WebElement logout;
	
	//constructor
	public DashboradPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	//operational methods
	public void clickLogout(String x)
	{	logout.click();	}
}
