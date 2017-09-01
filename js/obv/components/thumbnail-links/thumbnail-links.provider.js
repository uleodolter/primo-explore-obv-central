/*
 * obvThumbnailLinks.provider.js
 */

class ObvThumbnailLinksProvider {
    constructor() {
        this.config = {
            ft_match: /(Volltext|Fulltext)/,
            ft_label: {
                de_DE: 'Volltext',
                en_US: 'Fulltext'
            },
            toc_match: /(Inhaltsverzeichnis|Table of contents)/,
            toc_label: {
                de_DE: 'Inhalts-verzeichnis',
                en_US: 'Table of contents'
            }
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

export default ObvThumbnailLinksProvider;
