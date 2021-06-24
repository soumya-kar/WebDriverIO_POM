const internetPage= require("../pages/internetPage")
describe("Facebook", function() {
    it.skip("Select by visible text", function(){
        browser.url('https://www.facebook.com/');
       // browser.maximizeWindow();
        $('#day').selectByVisibleText('10')
        $('#month').selectByVisibleText('Apr')
        $('#year').selectByVisibleText('1990')
        browser.pause(5000)

    });

    it.skip("Select by index", function(){
        browser.url('https://www.facebook.com/');
       // browser.maximizeWindow();
       $('#month').selectByIndex(6)
       $('#year').selectByVisibleText('2020')
        browser.pause(5000)

    });

    it("Select by visible text", function(){
        browser.url('http://the-internet.herokuapp.com/');
        //browser.maximizeWindow();
        internetPage.clickOnLink('Dropdown');
        $('#dropdown').selectByVisibleText('Option 2')
      //  $('#dropdown').selectByIndex(0)

        browser.pause(3000)

    });

    it("Select by index", function(){
        browser.url('http://the-internet.herokuapp.com/');
        //browser.maximizeWindow();
        internetPage.clickOnLink('Dropdown');
       // $('#dropdown').selectByVisibleText('Option 2')
         $('#dropdown').selectByIndex(0)

        browser.pause(3000)

    });

    it("Select by attribute value", function(){
        browser.url('http://the-internet.herokuapp.com/');
        //browser.maximizeWindow();
        internetPage.clickOnLink('Dropdown');
       // $('#dropdown').selectByVisibleText('Option 2')
         $('#dropdown').selectByAttribute('value', '1')

        browser.pause(3000)

    });

    it("Print all values in the dropdown", function(){
        browser.url('http://the-internet.herokuapp.com/');
        //browser.maximizeWindow();
        internetPage.clickOnLink('Dropdown');
        $('#dropdown').click();
       // $('#dropdown').selectByVisibleText('Option 2')
       let list=$$("//select[@id='dropdown']/option");
       console.log('No of elements: '+list.lenth);
       for(let i=0;i<list.lenth; i++){
           const ele=list[i];
           console.info(ele.getText());
           if(ele.getText().equals('Option 1'))
                ele.click();
       }
        

        browser.pause(10000)

    });

});
