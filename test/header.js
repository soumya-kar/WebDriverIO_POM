const crmPage= require("../pages/crmProPage")
describe("fresh works", function() {
    it.skip("Get header value", function(){
        browser.url('https://www.freshworks.com/');
        browser.maximizeWindow();
        const header= $('h1');
    
        let title= header.getText();
        console.log(title);

    });

    it ("Verify scroll works as expected", function(){
        browser.url('https://www.crmpro.com/');
        browser.pause(5000);
        browser.maximizeWindow();
        console.log('In view port '+crmPage.forgotPassword.isDisplayedInViewport());
        crmPage.forgotPassword.scrollIntoView();
        browser.pause(5000);
        

    });

});
