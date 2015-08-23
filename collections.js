var Schemas = {};
Categories = new Meteor.Collection("categories");
SubCategories = new Meteor.Collection("subcategories");
Products = new Mongo.Collection("products");
Customer = new Mongo.Collection("customer");
Cart = new Mongo.Collection("cart");
CartItems = new Mongo.Collection("cartitems");
GameItems = new Mongo.Collection("gameitems");

Schemas.GameItems = new SimpleSchema({
  thumb: {
    type: String,
    label:'Thumbnail',
  },
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  price: {
    type: 1,
    label: "USD Price"
  },
  catName: {
    type: String,
    label: "Category Name"
  }
});

GameItems.attachSchema(Schemas.GameItems);
