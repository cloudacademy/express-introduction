// Require express to import the express module
const express = require("express");

// The express() function is a top-level function exported by the express module.
// This allows access to different express methods such as the listen method
const app = express();

// Variable for the listening port for the express application
const PORT = 3001;

// Binds and listens for connections on the specified host and port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
