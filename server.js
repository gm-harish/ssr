import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './src/pages/Home';

const app = express();

//index false to not cache data
app.use(express.static('./build', {index: false}));

app.get('/*', (req, res) => {
  //converts jsx into html
  const reactApp = renderToString(<Home></Home>);

  return res.send(`
  <html>
  <body>
  <div id="root">${reactApp}</div>
  </body>
  </html>`);
});

app.listen(8080, () => {
  console.log('server is listening on port 8080');
});
