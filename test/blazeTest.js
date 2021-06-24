const blazePage= require("../pages/blazemeter");

describe("Blazemeter test for findElements", () =>{
  it ("Get text of all Header link", () =>{
    browser.url('https://www.blazemeter.com/');
    browser.maximizeWindow();
    blazePage.getAllHeaderLinkText;
    console.log(blazePage.specificTabFromHeader(1).isDisplayed());
    console.log(blazePage.specificTabFromHeader(1).isEnabled());
    blazePage.specificTabFromHeader(1).click();
    blazePage.allProductFeatureLinks;

  });
});