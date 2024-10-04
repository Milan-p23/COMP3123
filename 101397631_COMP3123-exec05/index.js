const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req, res) => {
  fs.readFile('user.json', (err, data) => {
    if (err) {
      return res.status(500).json({ status: false, message: "Error reading user.json" });
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res) => {
  const { username, password } = req.body;  // This will not throw an error now if body is parsed

  // Read data from user.json file
  fs.readFile('user.json', (err, data) => {
    if (err) {
      return res.status(500).json({ status: false, message: "Error reading user.json" });
    }

    const user = JSON.parse(data);  // user is a single object, not an array

    // Check if username is valid
    if (user.username !== username) {
      return res.json({ status: false, message: "User Name is invalid" });
    }

    // Check if password is valid
    if (user.password !== password) {
      return res.json({ status: false, message: "Password is invalid" });
    }

    // Username and password are valid
    res.json({ status: true, message: "User Is valid" });
  });
});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req, res) => {
  const username = req.query.username;
  if (username) {
    res.send(`<b>${username} successfully logged out.</b>`);
  } else {
    res.send('<b>Username is required to logout.</b>');
  }
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error to the console
  res.status(500).send('<h1>Server Error</h1><p>Something went wrong</p>'); // Respond to the client
});


app.use('/', router);



app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));