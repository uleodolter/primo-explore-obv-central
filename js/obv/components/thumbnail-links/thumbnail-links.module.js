/**
 * obvThumbnailLinks module
 */

import ObvThumbnailLinksProvider from './thumbnail-links.provider';
import ObvThumbnailLinksComponent from './thumbnail-links.component';

export const ObvThumbnailLinksModule = angular
    .module('obvThumbnailLinks', [])
        .provider('obvThumbnailLinks', ObvThumbnailLinksProvider)
        .component(ObvThumbnailLinksComponent.selector, ObvThumbnailLinksComponent)
        .name;

