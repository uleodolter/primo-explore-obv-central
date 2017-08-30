/*
 * google-books.controller.js
 */

class ObvGoogleBooksController {

    constructor(helper, provider, $http) {
        this.helper   = helper;
        this.provider = provider;
        this.$http    = $http;

        this.books = [];
        this.isbns = [];
        this.lang  = 'en';
    }

    $onInit() {
        let vm   = this;
        let conf = this.provider.getConfig();
        
        this.parentCtrl = this.prmFullViewAfter.parentCtrl;
        this.lang = this.helper.interfaceLanguage().substr(0,2);

        /*
         * Get ISBN numbers from pnx.addata.isbn
         */
        let pnx = this.parentCtrl.item.pnx;
        if ( 'isbn' in pnx.addata ) {
            this.isbns = pnx.addata['isbn'];
        }

        if (this.isbns.length > 0) {
            let url     = conf.books_url;
            let params  = {
                jscmd:   'viewapi',
                bibkeys: 'ISBN:' + this.isbns.join(),
            };
            this.$http.jsonp( url, { params: params } ).then(function(response) {
                Object.keys(response.data).forEach((key) => {
                    let book = response.data[key];
                    if (book.preview == 'full' || book.preview == 'partial') {
                        vm.books.push(book);
                    } 
                });
            }, function(response) {
                console.log("jsonp " + url + " failed: " + response);
            });
        }
    }
}

ObvGoogleBooksController.$inject = ['obvHelperService', 'obvGoogleBooks', '$http'];

export default ObvGoogleBooksController;
