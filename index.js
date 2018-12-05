'use strict';
require('newrelic');
const express = require('express');
const path = require('path');
// const fs = require('fs');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const dateformat = require('dateformat');

const jetpack = require('jetpack').Jetpack;

const awsSave = require('./middleware/aws-save').middlewareStack;
const awsRetrive = require('./middleware/aws-retrieve').middlewareStack;

const app = express();
const port = process.env.NODE_PORT || 3008;

app.set('view engine', 'nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(jetpack);

const lhVideoComment = require('./middleware/lh-video-comment').lhVideoComment;
app.post('/lighthousedemo-comment', lhVideoComment);

app.use('/:customCode', awsRetrive, function(req, res, next) {
  const brandDomain = req.headers.host;
  
  if (brandDomain.indexOf('lbwdemo.ca') >= 0) {
    res.render('views/lbw-ca-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'Leads By Web Demo',
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
  }
  else if (brandDomain.indexOf('lbwdemo') >= 0) {
    res.render('views/lbw-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'Leads By Web Demo',
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
  }
  else if (brandDomain.indexOf('torchxdemo') >= 0) {
    res.render('views/torchx-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'TORCHx Demo',
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
  }
  else if (brandDomain.indexOf('yodledemo.ca') >= 0) {
    res.render('views/yodledemo-canada-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'Yodle Demo',
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
  }
  else if (brandDomain.indexOf('yodledemo') >= 0) {
    res.render('views/yodledemo-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'Yodle Demo',
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
  }
  else if (brandDomain.indexOf('leadstreamdemo.ca') >= 0) {
    res.render('views/leadstream-ca-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'Lead Stream Demo',
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
  }
  else if (brandDomain.indexOf('leadstreamdemo') >= 0) {
    res.render('views/leadstream-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'Lead Stream Demo',
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
  }
  else if (brandDomain.indexOf('lighthousedemo') >= 0) {

    if (res.customCode !== '') {
      if (res.screenShareCode !== undefined) {
        res.render('views/lighthouse-main-pages/home/demo-consent-page.html', {

          className: 'home',
          metaDescription: '',
          title: 'Lighthouse Demo',
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
      }
      else {
        res.render('views/lighthouse-main-pages/home/demo-page.html', {
          className: 'home',
          metaDescription: '',
          title: 'Lighthouse Demo',
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
      }
    }
    else {
      res.render('views/lighthouse-main-pages/home/index.html');
    }

  }
  else {
    res.render('views/torchx-main-pages/home/demo-page.html', {
      className: 'home',
      metaDescription: '',
      title: 'TORCHx Demo',
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
  }
});

app.use('/', function(req, res, next) {
  const brandDomain = req.headers.host;

  if (brandDomain.indexOf('acquisiodemo') >= 0) {
    res.render('views/acquisio-demo/index.html', {
      className: 'home',
      metaDescription: '',
      title: 'Lead Stream Demo'
    });
  }
  else {
    res.render('views/torchx-main-pages/home/index.html', {
      className: 'home',
      metaDescription: '',
      title: 'TORCHx Demo'
    });
  }
});




// start app ===============================================
app.listen(port);
// shoutout to the user
console.log(`Server running on port ${port}`);

// Nunjucks Configurations
const env = nunjucks.configure(__dirname, {
  autoescape: false,
  express: app
});

env.addFilter('formatDate', (str) => {
  const d = new Date(str);
  return dateformat(d, 'mmmm d, yyyy');
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






// "use strict" ;
// const express = require('express');
// const nunjucks = require('nunjucks');
// const awsSave = require('./middleware/aws-save').middlewareStack;
// const awsRetrive = require('./middleware/aws-retrieve').middlewareStack;

// const app = express();
// const port = process.env.NODE_PORT || 3008;

// app.set('view engine', 'nunjucks');

// nunjucks.configure('views', {
//   autoescape: true,
//   express: app
// });

// app.use('/', function(req, res, next) {
//   const brandDomain = req.headers.host;
//   if (brandDomain.indexOf('/') >= 0) {
//     res.render('views/index.html', {
//       className: 'home',
//       metaDescription: '',
//       title: 'Acquisio Demo'
//     });
//   }
// });
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/success', awsSave, function(req, res, next) {
// //   const brandDomain = req.headers.host;
// //   if (brandDomain.indexOf('acquisiodemo') >= 0) {
// //     res.render('views/acquisio/success/index.html', {
// //       className: 'success',
// //       metaDescription: '',
// //       title: 'Lead Stream Demo',
// //       customCode: res.customCode,
// //       customerName: res.customerName,
// //       brandDomain: brandDomain
// //     });
// //   }
// // });


// // app.use('/:customCode', awsRetrive, function(req, res, next) {
// //   const brandDomain = req.headers.host;
  
// //   if (brandDomain.indexOf('acquisiodemo') >= 0) {
// //     res.render('views/index.html', {
// //       className: 'home',
// //       metaDescription: '',
// //       title: 'Lead Stream Demo',
// //       repName: res.repName,
// //       repTitle: res.repTitle,
// //       repPhone: res.repPhone,
// //       repEmail: res.repEmail,
// //       repImage: res.repImage,
// //       repId: res.repId,
// //       customerName: res.customerName,
// //       customerSegment: res.customerSegment,
// //       screenShareType: res.screenShareType,
// //       screenShareCode: res.screenShareCode,
// //       property: res.property,
// //       customCode: res.customCode,
// //       referer: req.headers.referer
// //     });
// //   }
  
// // });


// // app.use('/acquisio', function(req, res, next) {
// //   const brandDomain = req.headers.host;
// //   if (brandDomain.indexOf('acquisiodemo') >= 0) {
// //     res.render('views/acquisio/index.html', {
// //       className: 'home',
// //       metaDescription: '',
// //       title: 'Acquisio Demo'
// //     });
// //   } else {
// //     console.log('you done fucked up')
// //   }
// // });

// // start app ===============================================
// app.listen(port);
// // shoutout to the user
// console.log(`Server running on port ${port}`);

// // Nunjucks Configurations

// // const env = nunjucks.configure(__dirname, {
// //   autoescape: false,
// //   express: app
// // });

// // env.addFilter('formatDate', (str) => {
// //   const d = new Date(str);
// //   return dateformat(d, 'mmmm d, yyyy');
// // });

// // env.addFilter('htmlConvert', (str) => {
// //   const lines = str.split('\n');
// //   let res = '';

// //   for (var i = 0; i < lines.length; i++) {
// //     if (lines[i]) {
// //       res += '<p>' + lines[i] + '</p>';
// //     }
// //   }
// //   return res;
// // });

// // env.addFilter('jsonStringify', (str) => {
// //   return JSON.stringify(str);
// // });

// // module.exports = app;