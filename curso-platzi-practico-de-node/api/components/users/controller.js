const TABLE = 'users';

function Controller(injectedStore) {
    const store = injectedStore || require('../../../store/db');

    function list(query) {
        return store.list(TABLE, query);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    function create(data) {
        return store.create(TABLE, data);
    }

    function update(id, data) {
        return store.update(TABLE, id, data);
    }

    function remove(id) {
        return store.remove(TABLE, id);
    }

    return {
        list,
        get,
        create,
        update,
        remove,
    };
}

module.exports = Controller;
