import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQmlKQO5H0bTnjOgKZn50_FWmgMccmQLw",
    authDomain: "savapp-3dd0f.firebaseapp.com",
    databaseURL: "https://savapp-3dd0f.firebaseio.com",
    projectId: "savapp-3dd0f",
    storageBucket: "savapp-3dd0f.appspot.com",
    messagingSenderId: "456931428577"
};
const fire = firebase.initializeApp(config);
export default fire;