const FINAL_URL = 'https://www.google.com';

var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

http.createServer(function (req, res) {
    proxy.web(req, res, { target: FINAL_URL, secure: false });
    res.setHeader('Access-Control-Allow-Headers', 'authorization,content-type');
}).listen(3001);