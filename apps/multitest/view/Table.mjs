import Base from '../../../src/table/Container.mjs';

class Table extends Base {
    static config = {
        className: 'Multi.view.Table',
        ntype: 'multi-table',
        selectionModel: {        // for modified RowModel
            singleSelect: false,
            dblclickEnabled: true,
        },
        columns: [{
            dataField: 'timestamp',
            text: 'Date',
            flex: 3,
            renderer: data => data.value.toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
        }, {
            dataField: 'humanReadableLocation',
            text: 'Location',
            flex: 3,
        }, {
            dataField: 'depth',
            text: 'Depth',
            align: 'right',
            flex: 1,
            renderer: data => data.value.toLocaleString()
         }, {
            dataField: 'size',
            text: 'Magnitude',
            align: 'right',
            flex: 1,
            renderer: data => data.value.toLocaleString()
         }, {
            dataField: 'position',
            text: 'Position',
            align: 'right',
            flex: 3,
            renderer: data => 'lat: ' + data.value.lat.toLocaleString() + ', lng: ' + data.value.lng.toLocaleString()
            
        }]
    }
}

export default Neo.setupClass(Table);
