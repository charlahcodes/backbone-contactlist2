import Backbone from 'backbone';
import $ from 'jquery';

import ContactsCollection from './contacts_collection';

import contactListTemplate from './views/contactlist';
import contactTemplate from './views/contact';
import newTemplate from './views/add_new';
import ContactsModel from './contacts_model.js'

let Router = Backbone.Router.extend({

  routes: {
    "" : "showContactsList",
    "single/:id" : "showSpecificContact",
    "new" : "addNewContact"
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

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.newButton', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
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
      contact = this.contacts.add({objectId: contactId});
      this.showSpinner();
      contact.fetch().then(function() {
        router.$el.html( contactTemplate(contact.toJSON()) );
      });
    }
  },

  addNewContact: function() {
    // Grab the values
    // Create a new instance of model using the values
    // Add that model instance to collection instance
    // Save model
    // Redirect back to your main page
    this.$el.html(newTemplate);
  
  // Store form inputs and save to parse
    $('#submit').click(function() {
      var newModel = new ContactsModel ({
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        location: $('#location').val()
      });
      newModel.save();
    });
  },


  start: function() {
    Backbone.history.start();
  }

});

export default Router;