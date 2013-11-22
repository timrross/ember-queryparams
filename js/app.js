window.App = Ember.Application.create({
   LOG_TRANSITIONS: true,
   LOG_BINDINGS: true,
   LOG_VIEW_LOOKUPS: true,
   LOG_STACKTRACE_ON_DEPRECATION: true,
   LOG_VERSION: true,
   debugMode: true
});

App.ApplicationController = Ember.Controller.extend({
    appName: 'Ember Queryparam Builder'
});

App.IndexController = Ember.ObjectController.extend({
    rawUrl: '',
    normalizedUrl: '',
    queryParams: [],
    actions: {
        updateRawUrl: function() {
            var rawUrl = this.get('rawUrl'),
                uri = new URI(rawUrl);
            this.set('normalizedUrl', uri.normalize().href());
            var params = uri.normalize().query(true);
            var queryParams = [];
            console.log(params);
            for (name in params) {
                var param = {};
                param.name = name;
                param.value = params[name];
                queryParams.push(param);
            }
            console.log(queryParams);
            this.set('queryParams', queryParams);
        },
        newQueryParam: function () {
            var param = {};
            param.name = 'name';
            param.value = 'value';
            var queryParams = this.get('queryParams');
            queryParams.push(param);
            console.log(queryParams);
            this.set('queryParams', queryParams);
        }
    }
});