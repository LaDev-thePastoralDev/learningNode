/*
 * Primary file for the API
 * 
 */

//Dependencies
const server = require("./lib/server");
const workers = require("./lib/workers");
const helpers = require("./lib/helpers");
const cli = require("./lib/cli");

// helpers.sendTwilioSms("4158375309", `Hello`, function(err) {
//   console.log(`Error: ${err}`);
// });

// Declare the app
const app = {};

// Declare a global(that strict mode should catch)
foo = "bar";
// Init the function
app.init = function() {
  // Start the server
  server.init();

  // Start the workers
  workers.init();

  // Start the CLI, but we make sure it starts last
  setTimeout(function() {
    cli.init();
  }, 50);
};

// Execute
app.init();

// Export the app
module.exports = app;
