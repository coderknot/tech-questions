import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    newAnswerForm() {
      this.set('newAnswerForm', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
