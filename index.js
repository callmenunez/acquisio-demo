'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const awsSave = require('./middleware/aws-save').middlewareStack;
const awsRetrieve = require('./middleware/aws-retrieve').middlewareStack;

const app = express();
// const port = process.env.NODE_PORT || 3008;

app.set('view engine', 'nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));



app.use('/:customCode', awsRetrieve, function(req, res, next) {

  function logResponseBody(req, res, next) {
    var oldWrite = res.write,
        oldEnd = res.end;
  
    var chunks = [];
  
    res.write = function (chunk) {
      chunks.push(chunk);
  
      oldWrite.apply(res, arguments);
    };
  
    res.end = function (chunk) {
      if (chunk)
        chunks.push(chunk);

      var body = Buffer.concat(chunks).toString('utf8');
      console.log(req.path, body);
  
      oldEnd.apply(res, arguments);
    };
  
    next();
  }
  
  app.use(logResponseBody);

  const brandDomain = req.headers.host;
  // if (brandDomain.indexOf('demo.acquisio') >= 0) {
    res.render('views/acquisio-demo/index.html', {
      // className: 'home',
      metaDescription: '',
      title: 'Test Acquisio Demo',
      repName: res.repName,
      repTitle: res.repTitle,
      repPhone: res.repPhone,
      repEmail: res.repEmail,
      repImage: res.repImage,
      repId: res.repId,
      customerName: res.customerName,
      customerSegment: res.customerSegment,
      screenShareType: res.screenShareType,
      screenShareCode: res.screenShareCode,
      property: res.property,
      customCode: res.customCode,
      referer: req.headers.referer
    });
  // }
});


app.use('/', function(req, res) {
  // app.use('/', function(req, res, next) {
    const brandDomain = req.headers.host;
  
    // if (brandDomain.indexOf('demo.acquisio') >= 0) {
      res.render('views/acquisio-demo/index.html', {
        // className: 'home',
        metaDescription: '',
        title: 'Acquisio Demo test'
      });
    // }
  });

// start app ===============================================
// app.listen(port);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
// shoutout to the user
console.log(`Server running on port ${port}`);

// Nunjucks Configurations
const env = nunjucks.configure(__dirname, {
  autoescape: false,
  express: app
});

env.addFilter('htmlConvert', (str) => {
  const lines = str.split('\n');
  let res = '';

  for (var i = 0; i < lines.length; i++) {
    if (lines[i]) {
      res += '<p>' + lines[i] + '</p>';
    }
  }
  return res;
});

env.addFilter('jsonStringify', (str) => {
  return JSON.stringify(str);
});

module.exports = app;
