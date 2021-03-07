const request = require('request');

function req({ method, url, body, query, join }) {
    return new Promise((resolve, reject) => {
        request(
            {
                method,
                headers: {
                    'content-type': 'application/json',
                },
                url,
                body,
            },
            (error, res, body) => {
                if (error) {
                    console.error(`Error with external DB | ${url}`, error);
                    return reject(error.message);
                }

                const response = JSON.parse(body);

                return resolve(response.body);
            },
        );
    });
}

function CreateRemoteDB(dbUrl) {
    function list(table, query, join) {
        return req({ method: 'GET', url: `${dbUrl}/${table}` });
    }

    return {
        list,
    };
}

module.exports = CreateRemoteDB;
