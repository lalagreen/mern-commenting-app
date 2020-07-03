const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      req.body
    );
  });  

 if( process.env.NODE_ENV === 'production') {
   // serve any static file
   app.use(express.static(path.join(__dirname, 'client/build')));

   // Handle React routing, return all request to React app
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
   })
 }

  app.listen(port, () => console.log(`Listening on port ${port}`));
