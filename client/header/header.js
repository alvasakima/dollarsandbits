
Template.header.helpers({
  isCorrect: function(){
     return Session.get("isCorrect");
  },
  isNotCorrect: function(){
    return Session.get("isNotCorrect");
  }
});

Template.header.events({
  "click #home": function(event, template){
    Session.set('isCorrect',false);
    Session.set('isNotCorrect',false);
    Session.set('firstRun',true);
  }
});


// Template.header.events({
//     'click a.sidebar-left-toggle':function(evt,tmpl){
//       if (!$('.sidebar').hasClass('sidebar-left')){
//           $('.sidebar').addClass('sidebar-left');
//       }
//     },
//     'click a.sidebar-right-toggle':function(evt,tmpl) {
//       if ($('.sidebar').hasClass('sidebar-left')){
//           $('.sidebar').removeClass('sidebar-left');
//       };
//     },
//     'click a.no-sidebar-toggle':function(evt,tmpl){
//       if (!$('.content').hasClass('no-sidebar')){
//           $('.content').addClass('no-sidebar');
//       } else {
//           $('.content').removeClass('no-sidebar');
//       };
//     },
//     'click a.hide-sidebar-toggle':function(evt,tmpl) {
//       if ($('.sidebar').hasClass('hide')){
//           $('.sidebar').removeClass('hide');
//       } else {
//           $('.sidebar').addClass('hide');
//       };
//     }
// });
