import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        openForm(param) {
            return this.get('store').showForm(param);
        },
        closeForm(param) {
            return this.get('store').showForm(param);
        },
        loginSubmit(model) {
            console.log('userLogin: desde index');
            console.log(model.user);
            const store = this.get('store');
            return store.loginSubmit(model);
        }
    },
    model() {
        const store = this.get('store');
        return store.getProfile();
    },
    store: Ember.inject.service()
});
