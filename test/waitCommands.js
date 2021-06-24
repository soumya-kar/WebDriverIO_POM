const internetPage= require("../pages/internetPage");
const testData= require("../test/testData")
describe("wait command",()=>{
    it ("wait for enabled", ()=>{
        browser.url("http://the-internet.herokuapp.com/");
        internetPage.clickOnLink(testData.link1);
        $("//a[text()='Example 2: Element rendered after the fact']").click();
        $("//button[text()='Start']").click();
        const text=$("//h4[text()='Hello World!']");
        text.waitForDisplayed(15000);
        text.waitForEnabled(15000)
        console.info('Element found: '+text.isDisplayed());
        


    })

    it ("wait for enabled", ()=>{
        browser.url("http://the-internet.herokuapp.com/");
        internetPage.clickOnLink(testData.link1);
        $("//a[text()='Example 2: Element rendered after the fact']").click();
        $("//button[text()='Start']").click();
        
        const text=$("//h4[text()='Hello World!']");
        browser.waitUntil(()=>{
            return text.isDisplayed()==true
        }, 6000, 'text is not displayed' )
       
        console.info('Element found: '+text.isDisplayed());
        


    })
})