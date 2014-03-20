//
// The client-side code for the commits page.
//
// [Browserify](https://github.com/substack/node-browserify) lets us write this
// code as a common.js module, which means requiring dependecies instead of
// relying on globals. This module exports the Backbone view and an init
// function that gets used in /assets/commits.js. Doing this allows us to
// easily unit test these components, and makes the code more modular and
// composable in general.
//

<<<<<<< HEAD
var Backbone = require('backbone')
  , $ = Backbone.$ = require('components-jquery')
  , sd = require('sharify').data
  , stroll = require('./templates/stroll2.js')
  , Commits = require('../../collections/commits.js')
  , listTemplate = function() {
=======
var Backbone = require('backbone'),
    $ = require('jquery'),
    sd = require('sharify').data,
    Commits = require('../../collections/commits.js'),
    listTemplate = function() {
>>>>>>> 66dffd0966220ceb7dd530ad584c55a82a3099a7
      return require('./templates/list.jade').apply(null, arguments)
    };
Backbone.$ = $;

module.exports.CommitsView = CommitsView = Backbone.View.extend({

  initialize: function() {
    stroll.bind( 'ul#commits-list', { live: true }  );
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$('#commits-list').html(listTemplate({ commits: this.collection.models }));
  },

  events: {
    'change .search-input': 'changeRepo'
  },

  changeRepo: function(e) {
    this.collection.repo = $(e.target).val();
    this.collection.fetch();
  }
});

module.exports.init = function() {
  new CommitsView({
    el: $('body'),
    collection: new Commits(sd.COMMITS, { owner: 'artsy', repo: 'flare' })
  });
};