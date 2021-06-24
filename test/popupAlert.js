const internetPage= require("../pages/internetPage");

describe("Handle alert pop up", ()=>{

it ("Get alert text", ()=>{
    browser.url("http://the-internet.herokuapp.com/");
    internetPage.clickOnLink("JavaScript Alerts");
    $("//button[text()='Click for JS Alert']").click();
    let alertText= browser.getAlertText();
    console.info(alertText)
    assert.equal(alertText,"I am a JS Alert")
    browser.acceptAlert()

})

it ("Accept the alert", ()=>{
    browser.url("http://the-internet.herokuapp.com/");
    internetPage.clickOnLink("JavaScript Alerts");
    $("//button[text()='Click for JS Alert']").click();
    browser.acceptAlert()
    let result=$('#result')
    assert.equal(result.getText() ,"You successfuly clicked an alert")

})

it ("Dismiss the alert", ()=>{
    browser.url("http://the-internet.herokuapp.com/");
    internetPage.clickOnLink("JavaScript Alerts");
    $("//button[text()='Click for JS Confirm']").click();
    browser.dismissAlert();
    let result=$('#result')
    assert.equal(result.getText() ,"You clicked: Cancel")

})

it ("Enter text in alert pop up", ()=>{
    browser.url("http://the-internet.herokuapp.com/");
    internetPage.clickOnLink("JavaScript Alerts");
    $("//button[text()='Click for JS Prompt']").click();
    browser.sendAlertText("Hi this a test alert msg")
    browser.acceptAlert();
    let result=$('#result')
    assert.equal(result.getText() ,"You entered: Hi this a test alert msg")

})



})