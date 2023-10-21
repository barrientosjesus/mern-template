const corsAnywhere = require('cors-anywhere');

module.exports = {
    proxyURL
};

let proxy = corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeaders: [], // Do not require any headers.
    removeHeaders: [] // Do not remove any headers.
});

function proxyURL(req, res) {
    console.log('proxy!')
    req.url = req.url.replace('/actors/', '/'); // Strip '/actors' from the front of the URL.
    // Emit the request to the proxy
    proxy.emit('request', req, res);
}