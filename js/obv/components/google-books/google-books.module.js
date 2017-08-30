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
            let urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
            urlWhitelist.push( obvGoogleBooksProvider.$get().getConfig().books_url );
            $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
        }])
        .name;

