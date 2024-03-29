const path = require('path');

const routes = (handler) => [
    {
        method: 'POST',
        path: '/albums/{id}/covers',
        handler: handler.postAlbumsCoversByIdHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                output: 'stream',
                maxBytes: 512000,
            },
        },
    },
    {
        method: 'GET',
        path: '/albums/{id}/{param*}',
        handler: {
            directory: {
                path: path.resolve(__dirname, 'covers'),
            },
        },
    },
];

module.exports = routes;