/*global requirejs*/

// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'demo' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "demo": "../demo"
    }
});

// Load the main app module to start the app
requirejs(["demo/main"]);
