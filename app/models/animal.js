import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  date: attr('string'),
  description: attr('string'),
  address: attr('string')
});
