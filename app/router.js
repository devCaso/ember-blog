import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/'});
  this.route('blog');
  this.route('post', { path: '/blog/:post_age/:post_month/:post_day/:post_title' });
  this.route('profile');
});

export default Router;
