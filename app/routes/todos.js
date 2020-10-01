import Route from '@ember/routing/route';

export default class TodosRoute extends Route {
    model() {
        // Retrieve to-do items
        return this.store.findAll('todo');
    }
}
