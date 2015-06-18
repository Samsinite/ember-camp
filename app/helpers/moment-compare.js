import Ember from 'ember';
import moment from 'moment';

export default Ember.Helper.helper(function(params) {
  var method = params[0];
  var leftValue = params[1];
  var rightValue = params[2];
  var thirdParam = params[3] || null;
  var leftMomentValue = moment(leftValue);

  if (thirdParam) {
    return leftMomentValue[method].call(leftMomentValue, rightValue, thirdParam);
  } else {
    return leftMomentValue[method].call(leftMomentValue, rightValue);
  }
});
