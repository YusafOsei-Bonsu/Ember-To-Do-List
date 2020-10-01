import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
    @attr('string') title;
    @attr('string') body;
    @attr('date') date;
    @attr('string') created_at;
}
