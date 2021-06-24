class Blazemeter{

    get productLoc(){
        return $("//a[text()='PRODUCT']")
    }
    
    get getAllHeaderLinks(){
        return $$('ul.list-nav-links>li');
    }

    get getAllHeaderLinkText(){
      return this.getAllHeaderLinks.filter(element => {
          console.log(element.getText());
      });

    }

    get allProductFeatureLinks(){
        return $$("//*[@class='product-main_header']/div//a");
    }

    get prodFeaturesLinkText() {
        return this.allProductFeatureLinks.filter(element => {
           console.log(element.getText());
        });
    }

    specificTabFromHeader(index){
        return $("ul.list-nav-links>li:nth-child("+index+")");
    }

    


}

module.exports= new Blazemeter();