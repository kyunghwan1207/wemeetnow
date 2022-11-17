const proxy = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:5000',
            changeOrigin: true
        })
    );
};