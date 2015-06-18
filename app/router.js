import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('animals', {path: '/'}, function() {
  });
  this.route('new');
  this.resource('animal', {path: '/animals/:animal_id'}, function() {
    this.resource('new-comment');
  });
});
