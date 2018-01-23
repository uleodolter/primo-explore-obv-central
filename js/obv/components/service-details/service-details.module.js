/**
 * obvServiceDetails module
 */


export const ObvServiceDetailsModule = angular
    .module('obvServiceDetails', [])
        .component('prmServiceDetailsAfter', {
            bindings: { parentCtrl: '<' },
            template: `
<obv-rvk-info></obv-rvk-info>
`
        })
        .name;

