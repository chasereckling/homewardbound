import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['animal'],
  actions: {
    addComment: function() {
      var newComment = this.store.createRecord('comment', {
        name: this.get('name'),
        date: this.get('date'),
        comment: this.get('comment')
      });
      var animal = this.get('controllers.animal.model');
      newComment.save().then(function(){
        animal.get('comments').pushObject(newComment);
        animal.save();
      });

      this.setProperties({
        name: '',
        date: '',
        comment: ''
      });

      this.transitionToRoute('animal', animal.id);
    }
  }
});
