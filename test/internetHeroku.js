const internetPage= require("../pages/internetPage");
const loginPage= require("../pages/LoginPage");

describe("Automate Internet app", () =>{
    it ("Verify page url", () =>{
        browser.url('http://the-internet.herokuapp.com/');
        browser.maximizeWindow();
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/')
        browser.pause(2000);
    
      });

    it ("Verify user is able to click the checkbox", () =>{
     // browser.url('http://the-internet.herokuapp.com/');
      browser.maximizeWindow();
      internetPage.clickOnLink('Checkboxes');
      internetPage.clickTheCheckbox(1);
      expect(internetPage.getCheckboxByindex(1).isSelected()).equals(true);
      //browser.pause(5000);
  
    });

    it ("Verify user is able to login successfully", () =>{
        browser.url('http://the-internet.herokuapp.com/');
         browser.maximizeWindow();
         internetPage.clickOnLink('Form Authentication');
         loginPage.enterUsername('tomsmith')
         assert.equal('tomsmith', loginPage.username.getValue());
         loginPage.enterPassword('SuperSecretPassword!');
         assert.equal('SuperSecretPassword!', loginPage.password.getValue());
         loginPage.clickLogin();
         expect(loginPage.flashMessage.isDisplayed()).equals(true);
         expect(loginPage.flashMessage.getText()).contains('You logged into a secure area!');
         //browser.pause(5000);
     
       });

       it ("Verify user is able to clear any field", () =>{
        browser.url('http://the-internet.herokuapp.com/');
         browser.maximizeWindow();
         internetPage.clickOnLink('Form Authentication');
         loginPage.enterUsername('tomsmith')
         assert.equal('tomsmith', loginPage.username.getValue());
         loginPage.username.clearValue();
         assert.equal('', loginPage.username.getValue());
     
       });

       it ("Verify user is able to hover over", () =>{
        browser.url('http://the-internet.herokuapp.com/');
        browser.maximizeWindow();
        internetPage.clickOnLink('Hovers');
        internetPage.getFigure(1).moveTo();
        expect(internetPage.figure1Text.isDisplayed()).equals(true);
        assert.equal('name: user1', internetPage.figure1Text.getText());
     
       });

       it ("Verify user is able press key ", () =>{
        browser.url('http://the-internet.herokuapp.com/');
        browser.maximizeWindow();
        internetPage.clickOnLink('Key Presses');
        internetPage.keySearchBox.setValue('Shift')
        expect(internetPage.resultKeyValue.isDisplayed()).equals(true);
        assert.equal('You entered: SHIFT', internetPage.resultKeyValue.getText());
     
       });

       it ("Verify user is able to drag and drop ", () =>{
        browser.url('http://the-internet.herokuapp.com/');
        browser.maximizeWindow();
        internetPage.clickOnLink('Drag and Drop');
        internetPage.sectionA.dragAndDrop(internetPage.sectionB);
        browser.pause(5000);
     
       });
  });
