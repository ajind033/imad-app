# About

This app consists of a simple sign up form, which registers a user using the Hasura auth api. User data on sign up is stored on the hasura cluster database and also in a google sheet, if the sign up process fails appropriate message is displayed to the user.

The UI is build using React JS and the backend is done using NodeJs-express.

For the app to function need a server that will receive the form data sent by the users, process this data and respond back to the user with state of the signup process. To store the user data in the google sheet we will use the Zapier webhook API provided. For the React app to talk to our NodeJs-express server, the endpoint URL of our server should be accessible to the React app and should use a secure HTTPS URL. For this reason, running our server locally will not work and instead we need to host our server online. In this tutorial, we are going to deploy our server on Hasura which automatically provides SSL-enabled domains.

#Deployment Instructions

* Press the Clone & Deploy button above and follow the instructions.
* The hasura quickstart command clones the project repository to your local system and also creates a free Hasura cluster where the project will be hosted for free.
* A git remote (called hasura) is created and initialized with your project directory.
* `git push hasura master` builds and deploys the project to the created Hasura cluster. But before doing so, make the required changes mentioned in the later sections.
* The Nodejs-Express app is deployed as a microservice called app, and the react ui is deployed as a microservice called ui
* Run the below command to open your app:
`$ hasura microservice open ui`
