import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scheduler', { path: '/' });
  this.route('stop-watch');

  this.route('workout-builder', function() {
    // Workout List View
    this.route('index');

    // New Workout
    this.route('new');

    // Edit Workout (by workout id)
    this.route('edit', { path: ':workout_id/edit' });
  });

  this.route('events', function() {
    this.route('edit', { path: ':event_id/edit' });
    this.route('new');
  });
});

export default Router;
