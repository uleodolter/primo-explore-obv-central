/*
 * obvRvkInfo.service.js
 */

class ObvRvkInfoService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    parseData(data) {
        const html = data.node.notation + ' - ' + data.node.benennung;
        if ('ancestor' in data.node) {
            return this.parseData(data.node.ancestor) + '<br/>' + html;
        }
        else {
            return html;
        }
    }

    getRvkInfo(api, notation) {
        const url  = api + notation.replace(' ','%20');

        return this.$http.jsonp(url, {cache: true, jsonpCallbackParam: 'jsonp'})
            .then((res) => {
                return this.parseData(res.data);
            });
    }
}

export default ObvRvkInfoService;
