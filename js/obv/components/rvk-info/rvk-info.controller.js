/*
 * obvRvkInfo.controller.js
 */

class ObvRvkInfoController {

    /*@ngInject*/
    constructor(obvHelperService, obvRvkInfo, obvRvkInfoService, $scope, $compile, $timeout) {
        this.helper   = obvHelperService;
        this.provider = obvRvkInfo;
        this.service  = obvRvkInfoService;
        this.$scope   = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.rvkCache = new Map();
    }

    $onInit() {
        this.parentCtrl = this.prmServiceDetailsAfter.parentCtrl;
        this.setupRvkCache();
        this.$timeout(() => this.injectRvkInfo());
    }

    setupRvkCache() {
        const conf = this.provider.getConfig();
        const pnx  = this.parentCtrl.item.pnx;
        if (conf.rvk_lds in pnx.display) {
            for (const notation of pnx.display[conf.rvk_lds]) {
                this.service.getRvkInfo(conf.rvk_api, notation).then((data) => {
                    this.rvkCache.set(notation, data);
                }).catch(() => {
                    this.rvkCache.set(notation, notation);
                });
            }
        }
    }

    injectRvkInfo() {
        let rvk = document.querySelectorAll('prm-service-details span[title="RVK"]');
        if (rvk.length > 0) {
            if (!rvk[0].hasAttribute('injected')) {
                let rvkValues = rvk[0].parentElement.nextSibling.querySelectorAll('prm-highlight span');
                if (rvkValues.length > 0 && rvkValues[0].innerText.length > 0) {
                    for (let node of rvkValues) {
                        angular.element(node).append(this.$compile(`
<span>
  <md-tooltip class="content-tooltip bright-tooltip" style="max-width: 50em">
    <span ng-bind-html="$ctrl.rvkCache.get('${node.innerText}')"></span>
  </md-tooltip>
  <prm-icon icon-type="svg" svg-icon-set="primo-actions" icon-definition="info"></prm-icon>
</span>`
                        )(this.$scope));
                    }
                    rvk[0].setAttribute('injected','true');
                }
            }
        }
    }
}


export default ObvRvkInfoController;
