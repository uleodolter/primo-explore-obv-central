/**
 * obvGoogleBooks module
 */

import ObvGoogleBooksProvider from './google-books.provider';
import ObvGoogleBooksComponent from './google-books.component';

export const ObvGoogleBooksModule = angular
    .module('obvGoogleBooks', ['obvFullView'])
        .provider('obvGoogleBooks', ObvGoogleBooksProvider)
        .component(ObvGoogleBooksComponent.selector, ObvGoogleBooksComponent)
        .config([ '$sceDelegateProvider', 'obvGoogleBooksProvider', ($sceDelegateProvider, obvGoogleBooksProvider) => {
            let whitelist = $sceDelegateProvider.resourceUrlWhitelist();
            $sceDelegateProvider.resourceUrlWhitelist( whitelist.concat( obvGoogleBooksProvider.$get().getConfig().books_url ) );
        }])
        .name;

