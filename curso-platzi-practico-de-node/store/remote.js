const axios = require('axios');
const { errors } = require('../utils');

const composeURL = (...params) => params.join('/');

function req({ method, url, body, query }) {
    return axios({
        method,
        headers: {
            'content-type': 'application/json',
        },
        url,
        body,
        params: query,
    })
        .then((response) => response.data.body)
        .catch((error) => {
            const { data } = error.response;

            console.error(`[REMOTE DB ERROR] ${JSON.stringify(data)}`);

            throw errors.error(400);
        });
}

function CreateRemoteDB(dbUrl) {
    function list(table, query, join) {
        return req({
            method: 'GET',
            url: composeURL(dbUrl, table),
            query: { ...query, join },
        });
    }

    function create(table, body) {
        return req({ method: 'POST', url: composeURL(dbUrl, table), body });
    }

    function get(table, id) {
        return req({ method: 'GET', url: composeURL(dbUrl, table, id) });
    }

    function update(table, id, body) {
        return req({ method: 'PUT', url: composeURL(dbUrl, table, id), body });
    }

    function remove(table, id) {
        return req({ method: 'DELETE', url: composeURL(dbUrl, table, id) });
    }

    return {
        list,
        create,
        get,
        update,
        remove,
    };
}

module.exports = CreateRemoteDB;
