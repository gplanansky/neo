import Viewport           from "../../../src/container/Viewport.mjs";
import Container          from "../../../src/container/Base.mjs";
import Table              from "./Table.mjs";
import StateProvider      from './MainStateProvider.mjs';
import MainViewController from './MainViewController.mjs';

class MainView extends Viewport {

    static config = {
        className: "Multi.view.MainView",
        autoMount: true,
        controller: { module: MainViewController},
        stateProvider: { module: StateProvider},
        layout: {ntype: 'flexbox', align: 'stretch'},
        items: [{
            module: Container,
            reference: 'mainview-tableslotRef',
            flex: '0 0 1',
            items: [{
                module: Container,
                reference: 'mainview-tablecontainerRef',
                width: '1000px',
                items: [{
                    ntype: 'button',
                    reference: 'tablewindow-maximizebuttonRef',
                    handler: 'onTableWindowMaximizeButtonClick',
                    iconCls: 'far fa-window-maximize',
                    text: 'Separate Window',
                    height: '25px'
                }, {
                    module: Container,
                    reference: 'mainview-tableRef',
                    items: [{
                        html: '<h1>Table</h1>',
                        style: { textAlign: 'center' },
                        height: '75px'
                    }, {
                        module: Table,
                        bind: {store: 'stores.earthquakes'},
                        listeners: {
                            select: (data) => {
                                console.log(data.record);
                            }
                        }
                    }]
                }],
            }]
        }],
    };

}

export default Neo.setupClass(MainView);