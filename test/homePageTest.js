const homePage= require("../pages/homepage")

describe("fresh works-home page automation", function() {
    it ("Verify home page elements", function(){
        browser.url('https://www.freshworks.com/');
        browser.maximizeWindow();
        
       let headerText= homePage.pageHeader.getText();
       console.log(headerText);

       let subHeaderText= homePage.subHeading.getText();
       console.log(subHeaderText);

       homePage.supportLink.click();
       browser.pause(5000);

    });

});