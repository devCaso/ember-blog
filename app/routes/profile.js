import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        loginSubmit(userLogin, passLogin, profile){
            let user, pass;
            if((user = localStorage.getItem('user')) && (pass =localStorage.getItem('password'))){
                if(userLogin === user && passLogin === pass){
                    profile.set('logged', true);
                    return this.get('store').loadProfile();
                }
                else {
                    alert('Login incorrecto!');
                }
            }
            else {
                alert('No hay datos previos en localStorage, nuevos usuario y password registrados');
                profile.set('logged', true);
                this.get('store').saveProfile(profile);
            }
        },
        saveProfile(profile) {
            this.get('store').saveProfile(profile);
            alert('Perfil actualizado');
            this.transitionTo('/');
        }
    },
    model() {
        const store = this.get('store');
        return store.getProfile();
    },
    store: Ember.inject.service()
});
