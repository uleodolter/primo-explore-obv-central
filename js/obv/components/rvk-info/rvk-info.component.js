/*
 * obvRvkInfo.component.js
 */

import controller from './rvk-info.controller';

const ObvRvkInfoComponent = {
    selector: 'obvRvkInfo',
    require: { prmServiceDetailsAfter: '^prmServiceDetailsAfter' },
    controller,
    bindings: {parentCtrl: '<'},
    template: ''
};

export default ObvRvkInfoComponent;
