import StateProvider from '../../../src/state/Provider.mjs';
import Store         from '../../../src/data/Store.mjs';

class MainStateProvider extends StateProvider {
    static config = {
        className: 'multi.view.MainStateProvider',
        data: {
            plotconf: {
                "data": [{ "y": [0, 3, 1, 4] }],
                "layout": { "width": 500, "height": 400}
            },
        },
        stores: {
            earthquakes: {
                module: Store,
                model: {
                    fields: [{
                        name: 'annotations',
                        type: 'object',
                    }, {
                        name: 'depth',
                        type: 'data-field-float'
                    }, {
                        name: 'humanReadableLocation'
                    }, {
                        name: 'position',
                        calculate: data => ({ lat: data.latitude, lng: data.longitude })
                    }, {
                        name: 'size',
                        ntype: 'data-field-float',
                    }, {
                        name: 'timestamp',
                        type: 'Date'
                    }, {
                        name: 'title',
                        calculate: data => data.humanReadableLocation
                    }]
                },
                url: '/apps/multitest/view/earthquakes.json',
                responseRoot: 'results',
                autoLoad: true
            }
        }
    }
}

export default Neo.setupClass(MainStateProvider);
