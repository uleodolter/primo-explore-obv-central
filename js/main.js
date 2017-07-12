/**
 * OBV Services - Primo New UI Central Package
 * main.js
 */

import ObvHelperService from './obv/services/helper.service';
import ObvComponentsModule from './obv/components/components.module';

angular.module('centralCustom', ['angularLoad'])
    .service('obvHelperService', ObvHelperService);

require('./customTemplates.js');
