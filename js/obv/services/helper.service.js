/**
 * OBV helper service
 */

class ObvHelperService {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    userSessionManagerService() {
        return this.$rootScope.$$childHead.$ctrl.userSessionManagerService;
    }
/*
    jwtUtilService() {
        let ums = this.userSessionManagerService();
        return ums.jwtUtilService;
    }
*/

    interfaceLanguage() {
        let ums = this.userSessionManagerService();
        return ums.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
    }

    vid() {
        let ums = this.userSessionManagerService();
        return ums.vid() || $window.appConfig['vid'];
    }
}

export default ObvHelperService;
