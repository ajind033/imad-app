# About

This app consists of a simple sign up form, Which registers a user using the Hasura auth api. User data on sign up is stored on the hasura cluster database and also in a google sheet, if the sign up process fails appropriate message is displayed to the user.

The UI is build using React JS and the backend is done using NodeJs-express.

For the app to function need a server that will receive the form data sent by the users, process this data and respond back to the user with state of the signup process. To store the user data in the google sheet we will use the Zapier webhook API provided. For the React app to talk to our NodeJs-express server, the endpoint URL of our server should be accessible to the React app and should use a secure HTTPS URL. For this reason, running our server locally will not work and instead we need to host our server online. In this tutorial, we are going to deploy our server on Hasura which automatically provides SSL-enabled domains.
