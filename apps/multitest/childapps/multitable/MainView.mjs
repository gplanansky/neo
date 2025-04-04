import Viewport from '../../../../src/container/Viewport.mjs';

/**
 * @class MultiTable.MainView
 * @extends Neo.container.Viewport
 */
class MainView extends Viewport {
    static config = {

        /**
         * @member {String} className='MultiTable.MainView'
         * @protected
         */
        className: 'MultiTable.MainView',
        /**
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'}
    }
}

export default Neo.setupClass(MainView);
