/**
 * OBV Components module
 * This module is the container reference for all reusable components.
 */

import ObvThumbnailLinksModule from './thumbnail-links/thumbnail-links.module';
import ObvFullViewModule from './full-view/full-view.module';
import ObvWikipediaModule from './wikipedia/wikipedia.module';
import ObvGoogleBooksModule from './google-books/google-books.module';

export const ObvComponentsModule = angular
    .module('obvComponents', [
        ObvThumbnailLinksModule,
        ObvFullViewModule,
        ObvWikipediaModule,
        ObvGoogleBooksModule,
    ])
    .name;
