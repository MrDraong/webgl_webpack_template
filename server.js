const express = require('express');

const app = express();

app.use('/static', express.static('build/static'));
//app.use('/js',express.static('build/js'))
app.use(express.static('build/'));

app.listen(8080, () => {
  console.log('server started at 8080');
});