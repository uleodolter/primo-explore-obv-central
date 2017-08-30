/**
 * obvWikipedia module
 */

import ObvWikipediaProvider from './wikipedia.provider';
import ObvWikipediaComponent from './wikipedia.component';

export const ObvWikipediaModule = angular
    .module('obvWikipedia', ['obvFullView'])
        .provider('obvWikipedia', ObvWikipediaProvider)
        .component(ObvWikipediaComponent.selector, ObvWikipediaComponent)
        .config([ '$sceDelegateProvider', 'obvWikipediaProvider', ($sceDelegateProvider, obvWikipediaProvider) => {
            let urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
            urlWhitelist.push( obvWikipediaProvider.$get().getConfig().wiki_url );
            urlWhitelist.push( obvWikipediaProvider.$get().getConfig().isbn_url );
            $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
        }])
        .name;

