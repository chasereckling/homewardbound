import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAnimal: function() {
      var newAnimal = this.store.createRecord('animal', {
        name: this.get('name'),
        date: this.get('date'),
        description: this.get('description'),
        address: this.get('address')
      });
      newAnimal.save();
      this.setProperties({
        name: '',
        date: '',
        description: '',
        address: ''
      });






      this.transitionToRoute('animals');
    }
  }
});
