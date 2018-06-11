# amosss182

[![Build Status](https://travis-ci.org/asepart/amosss182.svg?branch=master)](https://travis-ci.org/asepart/amosss182)
[![codecov](https://codecov.io/gh/asepart/amosss182/branch/master/graph/badge.svg)](https://codecov.io/gh/asepart/amosss182)

The team develops an app to manage testdrivers.
The app has the following main features:
* Android App
* Java-based server backend
* Secure chat betweeen clients
* Problem reports via app

## Building

### Web Service Backend

We use PostgreSQL as our database. To run the webservice locally, a PostgreSQL instance must be installed on the developers machine. Use your distribution's package manager or a docker container for that. Then, run the database setup script with root privileges.

`# cd webservice/data`

`# ./setup-postgres.sh`

`# systemctl start postgresql`

`# launchctl start postgresql` (on mac os)

The backend for the mobile and the web app is implemented as a REST service, which can be build and executed using:

`$ cd webservice`

`$ mvn clean compile`

`$ mvn exec:java`

On port 12345, the service will respond with "Hello World" to any GET request and show the number of requests made in total. To build a docker image containing the service, run:

`$ mvn package docker:build`

Please make sure that your user has permission to talk to the docker daemon.

### Admin Web App

The demo Web Application can be build and executed by:

`$ cd admin-web-app`

`$ npm install`

`$ npm start`

You can now view admin-web-app in the browser on http://localhost:3000/

### User App

#### Android

To build the app one have to change the directory to `user-app` and run

`npm install`

`npm start`

The console outputs an QR code which can be scanned using the "Expo" app.

## Testing

### Web Service Backend

JUnit is used as our testing framework. To run the tests, execute:

`$ cd webservice`

`$ mvn test`

### Admin Web App

The web application uses Jest to run unit and rendering tests. To run from command line, execute:

`$ cd admin-web-app`

`$ npm install`

`$ npm test`

### User App

Like the web application, the mobile user app also uses Jest.

`$ cd user-app`

`$ npm install`

`$ npm test`
