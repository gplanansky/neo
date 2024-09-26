import Model from '../../../src/data/Model.mjs';

/**
 * @class Neo.examples.table.nestedRecordFields.MainModel
 * @extends Neo.data.Model
 */
class MainModel extends Model {
    static config = {
        className: 'Neo.examples.table.container.MainModel',

        fields: [{
            name: 'colspan',
            type: 'Object'
        }, {
            name: 'country',
            type: 'String'
        }, {
            name: 'firstname',
            type: 'String'
        }, {
            name: 'githubId',
            type: 'String'
        }, {
            name: 'lastname',
            type: 'String'
        }]
    }
}

export default Neo.setupClass(MainModel);
