import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TodosNewController extends Controller {
    @action
    addTodo() {
        let date, title, body;
        date = this.get('date');
        title = this.get('title');
        body = this.get('body');

        // Creating the new todo
        let newTodo = this.store.createRecord('todo', {
            title,
            body,
            date: new Date(date)
        });

        // Store in firebase db
        newTodo.save();

        // Clear form
        this.setProperties({
            title: '',
            body: ''
        });
    }
}
