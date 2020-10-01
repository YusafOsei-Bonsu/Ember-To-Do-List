import Ember from 'ember';

export default Ember.Controller.extend ({
    sortingKey: ['date'],
    sortedTodos: Ember.computed.sort('model', 'sortingKey')
});
