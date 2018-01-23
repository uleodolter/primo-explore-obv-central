/**
 * obvRvkInfo module
 */

import ObvRvkInfoProvider from './rvk-info.provider';
import ObvRvkInfoService from './rvk-info.service';
import ObvRvkInfoComponent from './rvk-info.component';

export const ObvRvkInfoModule = angular
    .module('obvRvkInfo', ['obvServiceDetails'])
        .provider('obvRvkInfo', ObvRvkInfoProvider)
        .service('obvRvkInfoService', ObvRvkInfoService)
        .component(ObvRvkInfoComponent.selector, ObvRvkInfoComponent)
        .config([ '$sceDelegateProvider', 'obvRvkInfoProvider', ($sceDelegateProvider, obvRvkInfoProvider) => {
            let whitelist = $sceDelegateProvider.resourceUrlWhitelist();
            $sceDelegateProvider.resourceUrlWhitelist( whitelist.concat( obvRvkInfoProvider.$get().getConfig().rvk_api + '**' ) );
        }])
        .name;

