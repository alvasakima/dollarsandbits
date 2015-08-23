Template.navbar.helpers({
	'Categories':function(){
	    return Categories.find();

	},
	'SubCategories':function(){
		return SubCategories.find({cat:this._id});
	}
});

Template.navbar.events({
	"click #gameboard": function(event, template){
		console.log('Setting firstRun to false');
		 Session.set('firstRun',false);
	}
});
