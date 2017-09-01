/*
 * wikipedia.component.js
 */

import controller from './wikipedia.controller';

const ObvWikipediaComponent = {
    selector: 'obvWikipedia',
    require: { prmFullViewAfter: '^prmFullViewAfter' },
    controller,
    templateUrl: 'obv-wikipedia.html',
};

export default ObvWikipediaComponent;
