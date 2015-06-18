import Ember from 'ember';
import moment from 'moment';

export function startOfDay(day) {
  if (day) {
    var momentDay = moment(day);

    return moment([momentDay.year(), momentDay.month(), momentDay.date()]);
  }
}

export default Ember.Helper.helper(function(params) {
  return startOfDay(read(params[0]));
});
