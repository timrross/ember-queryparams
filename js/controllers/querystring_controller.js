App.QuerystringController = Ember.ArrayController.extend({
  url: '',
  actions: {
    processUrl: function () {
      // Get the todo title set by the "New Todo" text field
      var url = this.get('url');
      console.log(url);
    }
  }
});