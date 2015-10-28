import $ from 'jquery';

const APP_ID = '4WklmhgPmrryGCZ8MhfvX3MqwL7hbFs6SDPVM9xC';
const API_KEY = '8JkfGndPKxF7QdvvkpGE4eKoQ5iecFP4oHcsf0XB';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});


