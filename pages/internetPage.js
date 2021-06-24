class InternerPage{

    getLinkElement(linkText){
        return $("//li/a[text()='"+linkText+"']");
    }

    clickOnLink(linkText){
        this.getLinkElement(linkText).click();
    }

    getCheckboxByindex(index){
        return $("form#checkboxes>input:nth-child("+index+")");
    }

    clickTheCheckbox(index){
        this.getCheckboxByindex(index).click();
    }

    getFigure(index){
        return $("(//*[@class='figure'])["+index+"]");
    }

    clearAndSetValue(ele){
        browser.setValue()
    }

   get  figure1Text(){
        return $("//h5[text()='name: user1']");
    }

    get keySearchBox(){
        return $('#target');
    }

    get resultKeyValue(){
        return $('#result');
    }

    get sectionA(){
        return $('#column-a');
    }

    get sectionB(){
        return $('#column-b');
    }

}

module.exports= new InternerPage();