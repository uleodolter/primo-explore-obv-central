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
            let whitelist = $sceDelegateProvider.resourceUrlWhitelist();
            $sceDelegateProvider.resourceUrlWhitelist( whitelist.concat([
                obvWikipediaProvider.$get().getConfig().wiki_url,
                obvWikipediaProvider.$get().getConfig().isbn_url,
            ]));
        }])
        .name;

