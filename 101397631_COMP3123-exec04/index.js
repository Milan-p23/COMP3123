const express = require('express');
const app = express();
const port = 3000;

// GET /hello - returns "Hello Express JS"
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});


// GET /user - returns firstname and lastname from query params
//Test : http://localhost:3000/user   ,  http://localhost:3000/user?firstname=Mike&lastname=Patel

app.get('/user', (req, res) => {
  console.log(req.query)
  const firstname = req.query.firstname || 'Milan';
  const lastname = req.query.lastname || 'Patel';
  res.send({ firstname, lastname });
});

// POST /user/:firstname/:lastname - returns firstname and lastname from path params
//Test : http://localhost:3000/user/Mike/Patel

app.post('/user/:firstname/:lastname', (req, res) => {
    console.log(req.params)  
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
