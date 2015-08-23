Meteor.methods({
  currentPrice:function(){

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var result = HTTP.call('GET',url,{timeout:30000});
    if (result.statusCode==200) {
      var respJson = result.content;
      console.log("response received.");
        //console.log(respJson)
      return respJson;
    }
  }
});
