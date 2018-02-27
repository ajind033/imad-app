# About

This app consists of a simple sign up form, which registers a user using the Hasura auth api. User data on sign up is stored on the hasura cluster database and also in a google sheet, if the sign up process fails appropriate message is displayed to the user.

The UI is build using React JS and the backend is done using NodeJs-express.

For the app to function need a server that will receive the form data sent by the users, process this data and respond back to the user with state of the signup process. To store the user data in the google sheet we will use the Zapier webhook API provided. For the React app to talk to our NodeJs-express server, the endpoint URL of our server should be accessible to the React app and should use a secure HTTPS URL. For this reason, running our server locally will not work and instead we need to host our server online. In this tutorial, we are going to deploy our server on Hasura which automatically provides SSL-enabled domains.

# Deployment Instructions

* Press the Clone & Deploy button above and follow the instructions.
* The hasura quickstart command clones the project repository to your local system and also creates a free Hasura cluster where the project will be hosted for free.
* A git remote (called hasura) is created and initialized with your project directory.
* `git push hasura master` builds and deploys the project to the created Hasura cluster. But before doing so, make the required changes mentioned in the later sections.
* The Nodejs-Express app is deployed as a microservice called app, and the react ui is deployed as a microservice called ui
* Run the below command to open your app:
`$ hasura microservice open ui`

# Where to make changes?

* Nodejs-Express
 * To make changes to the project, browse to `/microservices/app/src` and edit the respective files according to your requirements.
 * Commit the changes, and run git push hasura master to deploy the changes.
* React
 * To make changes to the project, browse to /`microservices/ui/app/src` and edit the respective files according to your requirements.
 * Commit the changes, and run git push hasura master to deploy the changes.

# Tutorial: Nodejs-Express
* Install NodeJS and Visual Basic Code or any other editor of your choice (for local development)
* Run `$ npm install` to install all the dependencies.
## Step 1 - Create Zap-webhook
* Head to <a href = "https://zapier.com">Zapier website</a>
* Sign up.
* Click on `MAKE A ZAP!` to make your own Zap :)
** The trigger will be WebHooks Catch Hook
** Set this payload (replace the values with some inputs):
   ` {
        "name" :name,
        "birthdate" :birthdate ,
        "username" :username ,
        "email" :email ,
        "mobile" :mobile ,
        "city" :city
    }`
** The trigger is now complete. A webhook URL will be generated, which will be required in Step 2. Now an action will be triggered whenever a POST/GET request is made at the generated webhook.
** Now for the action, choose Google sheets. Since we want to add user details as rows in a Sheet, click on `Create Spreadsheet Row`. Create a Google sheet in your Drive and give its link to the zap. Set up the sheet row by providing which column takes which value, obtained from the step-1 payload.
** To send email to signed up users, add another action: Email. Choose `Gmail` and choose the email field from step-1 as the `To` field. Write a custom email as a welcome message to the users :)
** Turn on the Zap.

<img src ="https://raw.githubusercontent.com/ajind033/imad-app/master/myfile/Screenshot%20(5).png" alt= "Zap">


## Step 2 - Modify the controller code
The controller code is written in `\microservices\api\src\controllers`

Run `hasura ms list` to generate the list of microservices and their URLs for your cluster.
Replace the following URLs used in the server code with your own cluster's URLs and webhook URL.
* Signup URL ()
   ` url =  "https://auth.colostomy71.hasura-app.io/v1/signup"`
* Data URL
    `url = "https://data.colostomy71.hasura-app.io/v1/query"`
* Webhook URL- to be replaced by the webhook url obtained in step-1
  ` webHook = 'https://hooks.zapier.com/hooks/catch/2907826/8vw21h/' `
## Step 3 - Push and deploy.
Commit the changes and push the commit to deploy your project to your cluster.

`git commit -am "First commit"`

`git push hasura master`
