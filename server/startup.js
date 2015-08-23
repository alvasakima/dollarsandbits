Meteor.startup(function(){
    if(Products.find().count() === 0){
      Products.insert({thumb:'grandsportvitesse.jpeg',name:'R/C Speed Power King',desc:'R/C Speed Pwer King - High speed racing - Turbo -red - Guokai Full function radio control: -Forward -Reverse -Tern left -Tern right -Stop -Head lights -Battery operated (not includes) 27MHz 8+ Ages Box Size (cm) : 26X14X10.5 cm Weight (kg) : 330 g',price:8.79,catName:'RC Cars'});
      Products.insert({thumb:'ferrari.jpg',name:'Ferrari LaFerrari Sport Racing Car RC',desc:'1/18 Scale RC 2013 Ferrari LaFerrari Radio Remote Control Sport Racing Car RC Full function Radio controlled 2013 Ferrari LaFerrari Directions of forward, reverse, stop, left and right Professionally made of fine crafted materials Tri-Channel Transmitter Uses 4 AA batteries and one 9 volt battery (not included)',price:24.99,catName:'RC Cars'});
      Products.insert({thumb:'maiston.jpg',name:'Maisto Lamborghini Huracan Radio Control Vehicle',desc:'R/C 1:24 Scale  All models include the pistol grip controller with assorted multiple frequencies so up to two cars can be driven simultaneously Featuring rims by premiere wheel makers 2 AA batteries for vehicle & 2 AAA batteries for controller (Not Included)',price:23.99,catName:'RC Cars'});
      Products.insert({thumb:'ducky.jpeg',name:'Purple Nuby Bathtime Fun Octopus Hoopla',desc:'Helps develop hand-eye coordination',price:'6.88',catName:'Bathtime'});
    }

    if(Categories.find().count() === 0){
        var toyId = Categories.insert({name:'TOYS'});
        SubCategories.insert({name:'RC Cars',cat:toyId});
        SubCategories.insert({name:'Bathtime',cat:toyId});
    }

    if(GameItems.find().count() === 0) {
      GameItems.insert({thumb:'gameitems/penny.jpg',name:'Penny',desc:'US Mint Penny (1cent)',price:.01,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/nickel.jpg',name:'Nickel',desc:'US Mint Nickel (5cents)',price:.05,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/dime.png',name:'Dime',desc:'US Mint Dime (10cents)',price:.10,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/quarter.jpg',name:'Quarter',desc:'US Mint Quarter (25cents)',price:.25,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/halfdollar.png',name:'Half Dollar',desc:'US Mint 50cent piece (50cents)',price:.50,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/dollarcoin.png',name:'Dollar Coin',desc:'US Mint Dollar Coin',price:1.00,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/dollarbill.png',name:'Dollar Bill',desc:'US Mint Dollar Coin',price:1.00,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/fivedollarbill.jpg',name:'5 Dollar Bill',desc:'US Mint 5 Dollar Bill',price:5.00,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/10dollarbill.jpg',name:'10 Dollar Bill',desc:'US Mint 10 Dollar Bill',price:10.00,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/20dollarbill.jpg',name:'20 Dollar Bill',desc:'US Mint 20 Dollar Bill',price:20.00,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/50dollarbill.jpg',name:'50 Dollar Bill',desc:'US Mint 50 Dollar Bill',price:50.00,catName:'Fiat Currency'});
      GameItems.insert({thumb:'gameitems/100dollarbill.jpg',name:'100 Dollar Bill',desc:'US Mint 100 Dollar Bill',price:100.00,catName:'Fiat Currency'});
    }

});
Meteor.methods({
    //delete when live
    removeAll:function(){
        Products.remove({});
        Categories.remove({});
        CartItems.remove({});
        GameItems.remove({});
    },
    addToCart:function(qty,product,session){
        if(qty > 0){
            CartItems.insert({qty:qty,product:product,sessid:session});
        } else{
            console.log('Quantity is Zero');
        }

    },
    removeCartItem:function(id){
        CartItems.remove({_id:id});
    }
});
