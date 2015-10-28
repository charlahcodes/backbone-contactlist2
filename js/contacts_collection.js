import Backbone from 'backbone';
import ContactsModel from './contacts_model';

let ContactsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/contacts',

  model: ContactsModel,

  parse: function(data) {
    return data.results;
  }

});

export default ContactsCollection;