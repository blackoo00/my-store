var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.test');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { render } from 'react-dom';
import { RoutingContext, match } from 'react-router';
import routes from './test/my/routes';


var app = express();
var compiler = webpack(config);

var webpackDevOptions = {
  noInfo: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

app.use(require('webpack-dev-middleware')(compiler, webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   // res.sendFile(path.join(__dirname, 'test.html'));
//   match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
//     console.log(routes);
//     console.log(err);
//     console.log(redirectLocation);
//     console.log(renderProps);
//     if (err) {
//       res.status(500).end(`Internal Server Error ${err}`);
//     } else if (redirectLocation) {
//       res.redirect(redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//         const html = renderToString(
//             <RoutingContext {...renderProps} />
//         );
//         res.end(renderFullPage(html));
//     } else {
//       res.status(404).end('Not found');
//     }
//   });
// });

app.use(handleRender);

function handleRender(req, res) {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    console.log(routes);
    console.log(err);
    console.log(redirectLocation);
    console.log(renderProps);
    if (err) {
      res.status(500).end(`Internal Server Error ${err}`);
    } else if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
        const html = renderToString(
            <div>
              <RoutingContext {...renderProps} />
            </div>
        );
        res.end(renderFullPage(html));
    } else {
      res.status(404).end('Not found');
    }
  });
  // const html = renderToString(<Routes/>)
  // const finalState = '123';
  // res.send(renderFullPage(html,finalState))
  // res.send(renderFullPage())
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="wrapper"><div>${html}</div></div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/app.js"></script>
      </body>
    </html>
    `
}

app.listen(3001, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3001');
});

