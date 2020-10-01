import Controller from '@ember/controller';

export default class TodosController extends Controller {

    // Sorting the todos by date
    get sortedTodos() {
        const sortedTodos = this.model.sortBy('date');
        return sortedTodos;
    }
}

// import Ember from 'ember';

// export default Ember.Controller.extend ({
//     filter: '',
//     filteredTodos: function() {
//         let filter = this.get('filter');
//         let rx = new RegExp(filter, 'gi');
//         let todos = this.model;

//         return todos.filter(function(todo) {
//             return todo.get('title').match(rx) || todo.get('body').match(rx)
//         });
//     }.property('arrangedContent', 'filter'),
//     key: ['date'],
//     sortedTodos: Ember.computed.sort('model', 'key')
// });
