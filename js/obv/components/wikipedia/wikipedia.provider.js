/*
 * wikipedia.provider.js
 */

class ObvWikipediaProvider {
    constructor() {
        this.config = {
            addata_field: 'lad24',
            wiki_url: 'https://ws.obvsg.at/cgi-bin/getWikipediaOverview.fpl',
            isbn_url: 'https://beacon.findbuch.de/isbn/isbn-anywp',
        };
    }
    setConfig(value) {
        if ( (value !== null) && (typeof value === 'object') ) {
            Object.assign(this.config, value);
        }
    }
    $get() {
        return {
            getConfig: () => {
                return this.config;
            }
        };
    }
}

export default ObvWikipediaProvider;
