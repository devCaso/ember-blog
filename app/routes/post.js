import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        openModal(modalName) {
            return this.render(modalName, {
                into: 'application',
                outlet: 'modal'
            });
        }
    },
    model(params) {
        const id = params.post_id;
        const store = this.get('store');
        return store.getPostById(id);
    },
    serialize: function(model){
        let postDayDate = model.date.substr(0, 2);
        let postMonthDate = model.date.substr(3, 2);
        let postAgeDate = model.date.substr(6, 4);
        let postTitle = model.title.replace(/ /g, '-').toLowerCase();
        return { post_day: postDayDate, post_month: postMonthDate, post_age: postAgeDate, post_title: postTitle };
    },
    store: Ember.inject.service()
});
