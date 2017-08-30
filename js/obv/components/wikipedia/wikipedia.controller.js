/*
 * wikipedia.controller.js
 */

class ObvWikipediaController {

    constructor(helper, provider, $http) {
        this.helper   = helper;
        this.provider = provider;
        this.$http    = $http;

        this.pnds = [];
        this.isbns = [];
        this.wikipedia_data = {};
        this.seealso_data = {};
    }

    $onInit() {
        let vm   = this;
        let conf = this.provider.getConfig();
       
        /*
         * Get GND person identifiers from pnx.addata.field
         */ 
        let field = conf.addata_field;
        let pnx   = this.parentCtrl.item.pnx;
        if ( field in pnx.addata ) {
            let count = pnx.addata[field].length;
            for (var i=0; i < count; i++) {
                var data = pnx.addata[field][i];

                if (data.match(/^GND: (.*)/)) {
                    this.pnds.push( RegExp.$1 );
                }
            }
        }
        /*
         * Get ISBN numbers from pnx.addata.isbn
         */
        if ( 'isbn' in pnx.addata ) {
            this.isbns = pnx.addata['isbn'];
        }

        if (this.pnds.length > 0) {
            let url     = conf.wiki_url;
            let params  = {
                format: 'json',
                vid:    this.helper.vid(),
                lang:   this.helper.interfaceLanguage(),
                pnd:    this.pnds.join(','),
                isbns:  this.isbns.join(','),
            };
            this.$http.jsonp( url, { params: params } ).then((response) => {
                vm.wikipedia_data = response.data;
            }, (response) => {
                console.log("jsonp " + url + " failed: " + response);
            });
        }

        if (this.isbns.length > 0) {
            let url     = conf.isbn_url;
            let params  = {
                format: 'seealso',
                id:     this.isbns[0],
            };
            this.$http.jsonp( url, { params: params } ).then(function(response) {
                vm.seealso_data = response.data;
            }, function(response) {
                console.log("jsonp " + url + " failed: " + response);
            });
        }
    }
}

ObvWikipediaController.$inject = ['obvHelperService', 'obvWikipedia', '$http'];

export default ObvWikipediaController;
