/*
 * obvThumbnailLinks.controller.js
 */

class ObvThumbnailLinksController {

    constructor(helper, provider) {
        this.helper   = helper;
        this.provider = provider;

        this.thumbnailLinks = [];
    }

    $onInit() {
        let conf = this.provider.getConfig();
        let lang = this.helper.interfaceLanguage();
        
        /*
         * Get fulltext and table-of-contents from pnx.links.linktorsrc links
         */ 
        if (this.parentCtrl.links.length > 0) {
            this.parentCtrl.links.forEach((link) => {
                if (link.linkType == 'http://purl.org/pnx/linkType/linktorsrc' && link.linkURL != 'errorPage') {
                    if (link.displayLabel.match( conf.ft_match )) {
                        this.thumbnailLinks.push([ link.linkURL, conf.ft_label[lang] ]);
                    } else if (link.displayLabel.match( conf.toc_match )) {
                        this.thumbnailLinks.push([ link.linkURL, conf.toc_label[lang] ]);
                    }
                }
            });
        }
    }
}

ObvThumbnailLinksController.$inject = ['obvHelperService', 'obvThumbnailLinks'];

export default ObvThumbnailLinksController;
