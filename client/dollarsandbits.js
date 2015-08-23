Session.setDefault('category', null);
Router.configure({
    layoutTemplate:'layout',
    yieldTemplates:{
        'products':{to:'products'},
        'cart':{to:'cart'},
        'categories':{to:'categories'},
        'instructions':{to:'instructions'}
    }
});

Router.route("/games", function(){

  this.render("games", {to: "products"});
});


Router.map(function(){
    this.route('/','layout');
    this.route('products', {
        layoutTemplate:'layout',
        path:'/:name',
        data: function() {
            console.log(this.params.name);
            Session.set('category',this.params.name);
        },
        template:'layout'
    });
});

Template.registerHelper('currency', function(num){
  return  '(' + '$' + Number(num).toFixed(2) + ')';
});

Template.registerHelper('rando', function getRandomInt(min,max) {
    var randonum = Number(Math.random() * (max - min) + min).toFixed(0);
    //var randomNum = getRandomInt(20,20000000000);
    return Number(randonum).toLocaleString() + ' ' + 'bits';
});

Template.registerHelper("bits", function(num){
    if (Session.get("bitprice")) {
      var bits = Number(num / Session.get("bitprice")).toFixed(0);
      return Number(bits).toLocaleString() + ' ' + 'bits';
    }

    Meteor.call('currentPrice',function(err,results){
      var curPrice = Number(JSON.parse(results).bpi.USD.rate).toFixed(2);
      var priceOfBit = Number(curPrice / 1000000).toFixed(8);
      var bits = Number(num / priceOfBit).toFixed(0);
      console.log("bits " + bits);
      Session.set("bitprice",priceOfBit);
      return Number(bits).toLocaleString() + ' ' + 'bits';
    });
});
