Schemas = {};


Schemas.Person = new SimpleSchema({
  firstName: {
    type: String,
    index: 1,
    unique: true
  },
  lastName: {
    type: String,
    optional: true
  },
  age: {
    type: Number,
    optional: true
  }
});

var Collections = {};


People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);



if (Meteor.isClient) {
Template.registerHelper("Collections", Collections);
  Template.registerHelper("Schemas", Schemas);
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

