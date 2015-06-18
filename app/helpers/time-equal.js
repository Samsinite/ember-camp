import Ember from 'ember';

export function timeEqual(t1, t2) {
  if (t1 && t2) {
    return t1.toString() === t2.toString();
  }
}

export default Ember.Helper.helper(function(params) {
  return timeEqual(read(params[0]), read(params[1]));
});
