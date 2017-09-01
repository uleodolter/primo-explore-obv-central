/*
 * obvThumbnailLinks.component.js
 */

import controller from './thumbnail-links.controller';

const ObvThumbnailLinksComponent = {
    selector: 'prmSearchResultThumbnailContainerAfter',
    controller,
    bindings: {parentCtrl: '<'},
    templateUrl: 'obv-thumbnail-links.html',
};

export default ObvThumbnailLinksComponent;
