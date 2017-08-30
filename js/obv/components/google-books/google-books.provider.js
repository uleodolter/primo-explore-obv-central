/*
 * google-books.provider.js
 */

class ObvGoogleBooksProvider {
    constructor() {
        this.config = {
            books_url: 'https://books.google.com/books',
        };
    }
    setConfig(value) {
        if ( (value !== null) && (typeof value === 'object') ) {
            Object.assign(this.config, value);
        }
    }
    $get() {
        return {
            getConfig: () => {
                return this.config;
            }
        };
    }
}

export default ObvGoogleBooksProvider;
