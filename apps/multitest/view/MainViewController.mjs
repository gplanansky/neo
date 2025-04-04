import ComponentController from '../../../src/controller/Component.mjs';
import NeoArray            from '../../../src/util/Array.mjs';

/**
 * @class MultiTest.view.MainViewController
 * @extends Neo.controller.Component
 */
class MainViewController extends ComponentController {
    static config = {
        /**
         * @member {String} className='Multi.view.MainViewController'
         * @protected
         */
        className: 'MultiTest.view.MainViewController',
        /**
         * @member {String} ntype='mainview-controller'
         * @protected
         */
        ntype: 'mainview-controller',
        /**
         * @member {String[]} connectedApps=[]
         */
        connectedApps: [],
        /**
         * @member {Object[]|null} data=null
         */
        data: null,


    }

    /**
     * @param {String} containerReference
     * @param {String} url
     * @param {String} windowName
     */
    createPopupWindow(containerReference, url, windowName) {
        let me = this;

        console.log(`${this.secondsStamp()} TIME: MainViewController.mjs createPopupWindow windowName: `, windowName);
        Neo.Main.getWindowData().then(winData => {
            me.component.getDomRect(me.getReference(containerReference).id).then(data => {
                let {height, left, top, width} = data;

                height -= 50; // popup header in Chrome
                left   += winData.screenLeft;
                top    += (winData.outerHeight - winData.innerHeight + winData.screenTop);

                Neo.Main.windowOpen({
                    //url           : `../${url}/index.html`,
                    //url           : `./${url}/index.html`,
                    url           : `${url}/index.html`,
                    windowFeatures: `height=${height},left=${left},top=${top},width=${width}`,
                    windowName
                });
            });
        });


    }

    /**
     * @param {String} [appName]
     * @returns {Neo.component.Base}
     */
    getMainView(appName) {
        if (!appName || appName === 'MultiTest') {
            return this.component;
        }

        return Neo.apps[appName].mainView;
    }

    /**
     * @param {Object} data
     * @param {String} data.appName
     */
    onAppConnect(data) {
        let me   = this,
            maximizeButton,
            name = data.appName,
            parentView, style, view;

        console.log(`${this.secondsStamp()} TIME: MainViewController.mjs onAppConnect(data) data: `, data);

        switch (name) {
            case 'MultiTable':
                view = me.getReference('mainview-tablecontainerRef');
                parentView = Neo.getComponent(view.parentId);
                //parentView.storeReferences();

                maximizeButton = me.getReference('tablewindow-maximizebuttonRef');
                style = maximizeButton.style || {display: 'none'};
                style.display = 'none';
                maximizeButton.style = style;

                break;
        }

        if (view) {

            console.log(`${this.secondsStamp()} TIME: MainViewController.mjs onAppconnect add ${name}`);
            NeoArray.add(me.connectedApps, name);

            console.log(`${this.secondsStamp()} TIME: MainViewController.mjs onAppconnect remove parentView ${view}`);
            parentView.remove(view, false);

            Neo.apps[name].on('render', () => {
                setTimeout(() => {
                    console.log(`${this.secondsStamp()} TIME: MainViewController.mjs on render add ${view} to ${me.getMainView(name)}`);
                    me.getMainView(name).add(view);
                }, 100);
            });

        }
    }

    /**
     * @param {Object} data
     * @param {String} data.appName
     */
    onAppDisconnect(data) {
        let me         = this,
            name       = data.appName,
            parentView = me.getMainView(name),
            view       = parentView.items[0],
            index, style, maximizeButton;

        console.log('onAppDisconnect', name);

        switch (name) {
            case 'MultiTest':
                Neo.Main.windowClose({
                    names: me.connectedApps,
                });
                break;
            case 'MultiTable':                
                view = parentView.items[0];
                break;
        }

        if (view) {
            NeoArray.remove(me.connectedApps, name);

            parentView.remove(view, false);

            switch (name) {
                case 'MultiTable':
                    maximizeButton = me.getReference('tablewindow-maximizebuttonRef');
                    style = maximizeButton.style || {display: 'none'};
                    style.display = null;
                    maximizeButton.style = style;

                    me.getReference('mainview-tableslotRef').add(view);
                    break;
            }

            Neo.apps[name].destroy();
        }
    }


    /**
     *
     */
    onComponentConstructed() {
        super.onComponentConstructed();

    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.currentWorker.on({
            connect   : me.onAppConnect,
            disconnect: me.onAppDisconnect,
            scope     : me
        });

        me.component.on('mounted', me.onMainViewMounted, me);
    }


    /**
     *
     */
    onMainViewMounted() {
        let me = this;
    }

    /**
     * @param {Object} data
     */

    onTableWindowMaximizeButtonClick(data) {
        console.log(`${this.secondsStamp()} TIME: MainViewController.mjs onTableWindowMaximizeButtonClick(data) data: `, data);
        this.createPopupWindow('mainview-tablecontainerRef', 'childapps/multitable', 'MultiTable');
    }

    secondsStamp(){
        let date = new Date() ;
        const magFormat = (num, digits = 2, fraction = 2) => new Intl.NumberFormat([], {
            minimumFractionDigits: fraction,
            maximumFractionDigits: fraction,
            minimumIntegerDigits: digits
        }).format(num);
        return `${date.getUTCSeconds()}:${magFormat(date.getUTCMilliseconds(),3,0)}`;
    }
}

export default Neo.setupClass(MainViewController);
