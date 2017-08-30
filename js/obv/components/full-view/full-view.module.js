/**
 * obvFullView module
 */


export const ObvFullViewModule = angular
    .module('obvFullView', [])
        .component('prmFullViewAfter', {
            bindings: { parentCtrl: '<' },
            template: `
<obv-wikipedia></obv-wikipedia>
<obv-google-books></obv-google-books>
`
        })
        .name;

