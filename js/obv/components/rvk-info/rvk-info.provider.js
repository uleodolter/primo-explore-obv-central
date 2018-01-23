/*
 * obvRvkInfo.provider.js
 */

class ObvRvkInfoProvider {
    constructor() {
        this.config = {
            rvk_api: 'https://rvk.uni-regensburg.de/api/json/ancestors/',
            rvk_lds: 'lds06'
        };
    }
    setConfig(value) {
        if ( (value !== null) && (typeof value === 'object') ) {
            angular.merge(this.config, value);
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

export default ObvRvkInfoProvider;
