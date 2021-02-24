const TABLE = 'posts';

function Controller(injectedStore) {
    const store = injectedStore || require('../../../store/db');

    function list(query) {
        return store.list(TABLE, query);
    }

    function create(post) {
        return store.create(TABLE, post);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    function update(id, post) {
        return store.update(TABLE, id, post);
    }

    function remove(id) {
        return store.remove(TABLE, id);
    }

    return {
        list,
        create,
        update,
        get,
        remove,
    };
}

module.exports = Controller;
