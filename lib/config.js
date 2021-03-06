/*
 * Create and export configuration variables
 * 
 */

//Container for the environments
const environments = {};
let date = Date().split(" ");
//Staging (default) environment
environments.staging = {
  httpPort: 4000,
  httpsPort: 4001,
  envName: "staging",
  hashingSecret: "thisIsASecret",
  maxChecks: 5,
  twilio: {
    accountsId: "ACb32d411ad7fe886aac54c665d25e5c5d",
    authToken: "9455e3eb3109edc12e3d8c92768f7a67",
    fromPhone: "+15005550006"
  },
  templateGlobals: {
    appName: "upTimeChecker",
    companyName: "LaDev, Inc",
    yearCreated: date[3],
    baseUrl: "http://localhost:4000/"
  }
};

//Production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production",
  hashingSecret: "thisIsASecret",
  maxChecks: 5,
  twilio: {
    accountsId: "ACb32d411ad7fe886aac54c665d25e5c5d",
    authToken: "9455e3eb3109edc12e3d8c92768f7a67",
    fromPhone: "+15005550006"
  },
  templateGlobals: {
    appName: "upTimeChecker",
    companyName: "LaDev, Inc",
    yearCreated: date[3],
    baseUrl: "http://localhost:5000/"
  }
};

//Determine which environment was passed as a command-line argument
const currentEnv =
  typeof process.env.NODE_ENV === "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

//Check that the current environment is one of the environments above, if not, default to staging
const environmentToExport =
  typeof environments[currentEnv] === "object"
    ? environments[currentEnv]
    : environments.staging;

//Export the module
module.exports = environmentToExport;
