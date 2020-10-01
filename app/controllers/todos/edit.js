import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TodosEditController extends Controller {
    @action
    editTodo(id) {
        let self, title, body, date;
        self = this;
        title = this.get('model.title');
        body = this.get('model.body');
        date = this.get('model.date');

        this.store.findRecord('todo', id)
        .then((todo) => {
            // Changing properties of to-do item
            todo.set('title', title);
            todo.set('body', body);
            todo.set('date', new Date(date));
            
            // Save updates in firebase
            todo.save();

            // Redirecting to the todos page
            self.transitionToRoute('todos');
        })
        .catch((err) => {
            console.error(err);
        });
    }
}
