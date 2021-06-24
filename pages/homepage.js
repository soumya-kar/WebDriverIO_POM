class Homepage{

    get pageHeader(){
        return $('h1');
    }

    get subHeading(){
        return $('div.banner-text-content>p.sub-text');
    }

    get supportLink(){
        return $("//*[text()='Support']");
    }

}

module.exports= new Homepage();