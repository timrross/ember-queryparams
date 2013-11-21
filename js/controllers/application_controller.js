App.ApplicationController = Ember.Controller.extend({
    appName: 'Ember Querystring Builder',
    rawUrl: '',
    urlParams: {},
    actions: {
        processUrl : function () {
            var rawUrl = this.get('rawUrl'),
                urlParams = {},
                match,
                pl     = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
            while (match = search.exec(rawUrl.split('?')[1])) {
                urlParams[decode(match[1])] = decode(match[2]);
            }
            this.set('urlParams', urlParams);
            console.log(urlParams);
        }
    }
});