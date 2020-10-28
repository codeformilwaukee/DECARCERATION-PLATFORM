import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import "./index.css";
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports"; // generated from an amplify init in pipeline
import config from "./config";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import norm_json from './assets/shFULLNormalized.json';



require("dotenv").config(); 

// Amplify.configure({
//   Auth: {
//     region: config.cognito.REGION,
//     userPoolId: config.cognito.USER_POOL_ID,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID,
//     userPoolWebClientId: config.cognito.APP_CLIENT_ID,
//   },
// });

// Amplify.configure(awsExports);

firebase.initializeApp(config.firebase);
const db = firebase.firestore();



ReactDOM.render(<App db={db} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
