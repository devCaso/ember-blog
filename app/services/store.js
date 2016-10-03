import Ember from 'ember';
import Post from 'ember-blog/models/post';
import Profile from 'ember-blog/models/profile';

const posts = [
    Post.create({
        id: '001',
        date: '03/06/2016',
        title: 'Titulo 1 de prueba',
        content: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
    }),
    Post.create({
        id: '002',
        date: '05/06/2016',
        title: 'Titulo 2 de prueba',
        content: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
    }),
    Post.create({
        id: '003',
        date: '07/06/2016',
        title: 'Titulo 3 de prueba',
        content: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]
    })
];
var profile = Profile.create({ user: null, password: null, name: null, lastName: null, description: null, logged: false });

export default Ember.Service.extend({
    getPostById(id) {
        return posts.findBy('id', id);
    },
    getPosts() {
        return posts;
    },
    getProfile() {
        return profile;
    },
    loadProfile() {
        profile.set('user', localStorage.getItem('user'));
        profile.set('password', localStorage.getItem('password'));
        profile.set('name', localStorage.getItem('name'));
        profile.set('lastName', localStorage.getItem('lastName'));
        profile.set('description', localStorage.getItem('description'));
        return profile;
    },
    saveProfile(profile) {
        let name, lastName, description;
        localStorage.setItem('user', profile.get('user'));
        localStorage.setItem('password', profile.get('password'));
        if(name = profile.get('name')){
            localStorage.setItem('name', name);
        }
        if(lastName = profile.get('lastName')){
            localStorage.setItem('lastName', lastName);
        }
        if(description = profile.get('description')){
            localStorage.setItem('description', description);
        }
        return true;
    }
});
