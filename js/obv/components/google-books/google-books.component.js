/*
 * google-books.component.js
 */

import controller from './google-books.controller';

const ObvGoogleBooksComponent = {
    selector: 'obvGoogleBooks',
    require: { prmFullViewAfter: '^prmFullViewAfter' },
    controller,
    templateUrl: 'google-books.html',
};

export default ObvGoogleBooksComponent;
