describe("Interaction with webelements", function(){
    it ("Enter value in a field", function(){
        browser.url('/');
        browser.maximizeWindow();
        const search= $('#twotabsearchtextbox');
        search.setValue('Smart watch');
        browser.pause(5000);
        const title= browser.getTitle();
        console.log(title);

    });

    it ("Click on a field", function(){
        browser.url('/');
        browser.maximizeWindow();
        const searchBox= $('#twotabsearchtextbox');
        searchBox.setValue('Smart watch');
        const searchIcon=$('input.nav-input');
        searchIcon.click();
        browser.pause(5000);


    });
});