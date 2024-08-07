import Container   from '../../../../src/container/Base.mjs';
import LivePreview from '../../../../src/code/LivePreview.mjs';

/**
 * @class Portal.view.home.FeatureSection
 * @extends Neo.container.Base
 */
class FeatureSection extends Container {
    /**
     * Valid values for textContainerPosition
     * @member {String[]} textContainerPositions=['start','end']
     * @protected
     * @static
     */
    static textContainerPositions = ['start', 'end']

    static config = {
        /**
         * @member {String} className='Portal.view.home.FeatureSection'
         * @protected
         */
        className: 'Portal.view.home.FeatureSection',
        /**
         * @member {String[]} baseCls=['portal-home-feature-section','neo-container']
         * @protected
         */
        baseCls: ['portal-home-feature-section', 'neo-container'],
        /**
         * @member {String|null} headline_=null
         */
        headline_: null,
        /**
         * @member {String|null} livePreviewCode_=null
         */
        livePreviewCode_: null,
        /**
         * @member {String|null} paragraph_=null
         */
        paragraph_: null,
        /**
         * @member {String|null} subHeadline_=null
         */
        subHeadline_: null,
        /**
         * Valid values: 'start' or 'end'
         * @member {String|null} textContainerPosition_=null
         */
        textContainerPosition_: null,
        /**
         * @member {Object} layout={ntype:'hbox',align:'stretch',pack:'center'}
         */
        layout: {ntype: 'hbox', align: 'stretch', pack: 'center'},
        /**
         * @member {Object[]} items
         */
        items: [{
            ntype : 'container',
            cls   : ['portal-content-text'],
            flex  : '1',
            style : {padding: '2rem'},
            layout: {ntype: 'vbox', align: 'center', pack: 'center'},
            items : [{
                cls      : 'neo-h1',
                flex     : 'none',
                reference: 'headline',
                tag      : 'h1'
            }, {
                cls      : 'neo-h2',
                flex     : 'none',
                reference: 'sub-headline',
                tag      : 'h2'
            }, {
                flex     : 'none',
                reference: 'paragraph',
                tag      : 'p'
            }]
        }, {
            ntype : 'container',
            cls   : 'portal-content-wrapper',
            flex  : '2',
            layout: 'fit',
            items : [{
                module   : LivePreview,
                cls      : ['page-live-preview'],
                height   : '100%',
                reference: 'live-preview'
            }]
        }]
    }

    /**
     *
     */
    async activate() {
        let me       = this,
            {parent} = me;

        await me.timeout(1000);

        if (parent.activePartsId === me.id && parent.mounted) {
            me.getReference('live-preview').activeView = 'preview'
        }
    }

    /**
     * Triggered after the headline config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHeadline(value, oldValue) {
        this.getItem('headline').html = value
    }

    /**
     * Triggered after the livePreviewCode config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLivePreviewCode(value, oldValue) {
        this.getItem('live-preview').value = value
    }

    /**
     * Triggered after the paragraph config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetParagraph(value, oldValue) {
        this.getItem('paragraph').html = value
    }

    /**
     * Triggered after the subHeadline config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetSubHeadline(value, oldValue) {
        this.getItem('sub-headline').html = value
    }

    /**
     * Triggered before the textContainerPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @returns {String}
     * @protected
     */
    beforeSetBadgePosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'textContainerPosition_')
    }
}

Neo.setupClass(FeatureSection);

export default FeatureSection;
