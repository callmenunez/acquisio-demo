"use strict" ;
const express = require('express');
const nunjucks = require('nunjucks');
// const awsSave = require('./middleware/aws-save').middlewareStack;
// const awsRetrive = require('./middleware/aws-retrieve').middlewareStack;

const app = express();
// const port = process.env.NODE_PORT || 3008;

app.set('view engine', 'html');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function(req, res) {
  res.render('index.html');
});
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/success', awsSave, function(req, res, next) {
//   const brandDomain = req.headers.host;
//   if (brandDomain.indexOf('acquisiodemo') >= 0) {
//     res.render('views/acquisio/success/index.html', {
//       className: 'success',
//       metaDescription: '',
//       title: 'Lead Stream Demo',
//       customCode: res.customCode,
//       customerName: res.customerName,
//       brandDomain: brandDomain
//     });
//   }
// });


// app.use('/:customCode', awsRetrive, function(req, res, next) {
//   const brandDomain = req.headers.host;
  
//   if (brandDomain.indexOf('acquisiodemo') >= 0) {
//     res.render('views/acquisio/index.html', {
//       className: 'home',
//       metaDescription: '',
//       title: 'Lead Stream Demo',
//       repName: res.repName,
//       repTitle: res.repTitle,
//       repPhone: res.repPhone,
//       repEmail: res.repEmail,
//       repImage: res.repImage,
//       repId: res.repId,
//       customerName: res.customerName,
//       customerSegment: res.customerSegment,
//       screenShareType: res.screenShareType,
//       screenShareCode: res.screenShareCode,
//       property: res.property,
//       customCode: res.customCode,
//       referer: req.headers.referer
//     });
//   }
  
// });


// app.use('/acquisio', function(req, res, next) {
//   const brandDomain = req.headers.host;
//   if (brandDomain.indexOf('acquisiodemo') >= 0) {
//     res.render('views/acquisio/index.html', {
//       className: 'home',
//       metaDescription: '',
//       title: 'Acquisio Demo'
//     });
//   } else {
//     console.log('you done fucked up')
//   }
// });

// start app ===============================================
// app.listen(port);
// shoutout to the user
// console.log(`Server running on port ${port}`);

// Nunjucks Configurations

// const env = nunjucks.configure(__dirname, {
//   autoescape: false,
//   express: app
// });

// env.addFilter('formatDate', (str) => {
//   const d = new Date(str);
//   return dateformat(d, 'mmmm d, yyyy');
// });

// env.addFilter('htmlConvert', (str) => {
//   const lines = str.split('\n');
//   let res = '';

//   for (var i = 0; i < lines.length; i++) {
//     if (lines[i]) {
//       res += '<p>' + lines[i] + '</p>';
//     }
//   }
//   return res;
// });

// env.addFilter('jsonStringify', (str) => {
//   return JSON.stringify(str);
// });

// module.exports = app;