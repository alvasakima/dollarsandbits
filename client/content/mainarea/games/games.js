Template.games.helpers({
    'gamelist':function() {
      var lowerBound = 0.25;
      var upperBound = 10000;
      console.log('In gamelist function');
      return GameItems.find();
      //return GameItems.find({price:{$gte: lowerBound}});
      //return GameItems.find({price:{$gte: lowerBound}});
      //return GameItems.find(this.price > lowerBound);
    }
});

Template.games.events({
    'click #button1':function(evt,tmpl){
      Session.set('isCorrect',true);
      Session.set('isNotCorrect',false);
    },
    'click #button2':function(evt,tmpl){
      Session.set('isCorrect',false);
      Session.set('isNotCorrect',true);
    },
    'click #button3':function(evt,tmpl) {
      Session.set('isCorrect',false);
      Session.set('isNotCorrect',true);
    }
});
