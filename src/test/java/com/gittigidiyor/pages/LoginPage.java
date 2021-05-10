package com.gittigidiyor.pages;

import com.gittigidiyor.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id="L-UserNameField")
    public WebElement userName;

    @FindBy(id="L-PasswordField")
    public WebElement password;

    @FindBy(id="gg-login-enter")
    public WebElement loginButton;




    public void login (String usernameStr, String passwordStr){
        userName.sendKeys(usernameStr);
        password.sendKeys(passwordStr);
        loginButton.click();


    }



}
