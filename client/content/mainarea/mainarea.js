
Template.mainarea.helpers ({
  firstRun: function(){
    var displayDocs = Session.get('firstRun');
    if (displayDocs == false) {
      return false
    }
    Session.set('firstRun',true);
    return true
  }
});
