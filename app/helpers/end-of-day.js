import Ember from 'ember';
import moment from 'moment';

export function endOfDay(day) {
  if (day) {
    var momentDay = moment(day);
    var oneDay = moment.duration(1, 'd');
    return moment([momentDay.year(), momentDay.month(), momentDay.date()]).add(oneDay);
  }
}

export default Ember.Helper.helper(function(params) {
  return endOfDay(params[0]);
})
