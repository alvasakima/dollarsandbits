Template.cart.cartitems = function(){

};
Template.cart.helpers({
    'cartitems':function(){
        var shopCart = [];
        var cartItems = CartItems.find({});
        var total = 0;

    cartItems.forEach(function(cartitem){
        var item = _.extend(cartitem,{});
        var product = Products.findOne({_id:cartitem.product});
        cartitem.productname = product.name;
        cartitem.price = (Number(product.price) * cartitem.qty);
        total += cartitem.price;
        shopCart.push(cartitem);
    });
    shopCart.subtotal = total;
    shopCart.tax = shopCart.subtotal * .06;
    shopCart.total = shopCart.subtotal + shopCart.tax;
    return shopCart;
  }
})

Template.cart.events({
    'click .removeci':function(evt,tmpl){
        Meteor.call('removeCartItem',this._id);
    },
    'click a.sidebar-left-toggle':function(evt,tmpl){
      if (!$('.sidebar').hasClass('sidebar-left')){
          $('.sidebar').addClass('sidebar-left');
      }
    },
    'click a.sidebar-right-toggle':function(evt,tmpl) {
      if ($('.sidebar').hasClass('sidebar-left')){
          $('.sidebar').removeClass('sidebar-left');
      };
    },
    'click a.no-sidebar-toggle':function(evt,tmpl){
      if (!$('.content').hasClass('no-sidebar')){
          $('.content').addClass('no-sidebar');
      } else {
          $('.content').removeClass('no-sidebar');
      };
    },
    'click a.hide-sidebar-toggle':function(evt,tmpl) {
      if ($('.sidebar').hasClass('hide')){
          $('.sidebar').removeClass('hide');
      } else {
          $('.sidebar').addClass('hide');
      };
    }
});

Template.header.events({

});
