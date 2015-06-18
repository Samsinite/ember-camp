import Ember from 'ember';
import moment from 'moment';
import { startOfDay } from './start-of-day';
import { timeEqual } from './time-equal';

export function isToday(day) {
  if (day) {
    var startOfToday = startOfDay(moment());
    var startDay = startOfDay(day);

    return timeEqual(startOfToday, startDay);
  }
}

export default Ember.Helper.helper(function(params) {
  return isToday(params[0]);
});

