/*
 * wikipedia.component.js
 */

import controller from './wikipedia.controller';

const ObvWikipediaComponent = {
    selector: 'prmFullViewAfter',
    controller,
    bindings: {parentCtrl: '<'},
    templateUrl: 'wikipedia.html',
};

export default ObvWikipediaComponent;
