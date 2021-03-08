const axios = require('axios');
const { errors } = require('../utils');

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

            console.error(`[REMOVE DB ERROR] ${JSON.stringify(data)}`);

            throw errors.error(400);
        });
}

function CreateRemoteDB(dbUrl) {
    function list(table, query, join) {
        return req({
            method: 'GET',
            url: `${dbUrl}/${table}`,
            query: {
                ...query,
                join,
            },
        });
    }

    return {
        list,
    };
}

module.exports = CreateRemoteDB;
