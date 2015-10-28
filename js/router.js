import Backbone from 'backbone';
import $ from 'jquery';

import ContactsCollection from './contacts_collection';

import contactListTemplate from './views/contactlist';
import contactTemplate from './views/contact';

let Router = Backbone.Router.extend({

  routes: {
    "" : "showContactsList",
    ":id" : "showSpecificContact",
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.contacts = new ContactsCollection();

    let router = this;

    this.$el.on('click', '.contact-list-item', function(event) {
      let $li = $(event.currentTarget);
      var contactId = $li.data('contact-id');
      router.navigate(`/${contactId}`);
      router.showSpecificContact(contactId);
    });
  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showContactsList: function() {    
    this.showSpinner();

    var router = this;

    this.contacts.fetch().then(function(){

      router.$el.html( contactListTemplate(router.contacts.toJSON()) );

    });

  },

  showSpecificContact: function(contactId) {
    let contact = this.contacts.get(contactId);

    if (contact) {
      this.$el.html( contactTemplate(contact.toJSON()) );
    } else {
      let router = this;
      contact = this.contacts.add({objectId: todoId});
      this.showSpinner();
      contact.fetch().then(function() {
        router.$el.html( contactTemplate(contact.toJSON()) );
      });
    }
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;