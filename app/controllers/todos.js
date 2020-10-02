import Controller from '@ember/controller';
export default class TodosController extends Controller {
    // Show a list of todos
    get showTodos() {
        const filter = this.get('filter');
        const rx = new RegExp(filter, 'gi');
        // Sort the list of todos by date
        const todos = this.model.sortBy('date');
        // Show a subset of todos if filter text is being entered
        return todos.filter((todo) => todo.get('title').match(rx) || todo.get('body').match(rx));
    }
}