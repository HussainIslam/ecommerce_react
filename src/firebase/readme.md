# Notes on Connecting Firebase to the application

This readme file is inteded to guide the user about how to connect Firebase and its libraries to the application and use it for the purpose of user authentication and database.


## What is Firebase?
Firebase is a service or solution provided by Google. Firebase mainly provides the back-end level solutions for different types of applications. This may include but not limited to: 

1. Server
2. Database
3. Authentication

Firebase handles or provides facilities to handle different types of services related to the above mentioned and others. This facilitates the development of back-end of any application as the developer doesn't have to worry about spinning a server or creating and handling a database themselves. These are all done by the Firebase. All the developer has to do is to connect their application with Firebase services and interact using the Firebase provided methods.

## Requirements for using Firebase
You would need a Google account to use Firebase.

## Adding a Project to Firebase
1. Log into your google account
2. Go to [Firebase Website](https://firebase.google.com)
3. On the upper-right corner you should see a `Go to Console` button (if you can't find the button just go to this address: [Firebase Console](https://console.firebase.google.com/)). This will load the Firebase console.
![Firebase Console](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/step_3.png)
1. Once the console loads, click on the big `Add Project` button. This will open a new modal with the options for adding a project.
![Add Project](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/step_4.png)
1. Enter a name for the project under `Project name` and press `Continue`
![Project Name](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/step_5.png)
1. Turn on the features that you want to be added to your Firebase project and click `Continue`
![](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/step_6.png)
2. Choose or create a Google analytics Account from the dropdown and click `Create Project` button. This will create a Firebase project and the selected features to it. This may take a few seconds.
![Create Project](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/step_7.png)
3. After the project is created you should see a message saying that the project is ready. You should also see a `Continue` button, which you should click to proceed.
4.  You will be redirected to the project dashboard, where under the `Project Overview` section, you will be able to see the main services that Firebase can provide for the developers.
![](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/step_9.png)

## Adding an Application to Firebase Project
1. Once on the Project dashboard, you should see some buttons to add iOS, Android, and Web applications to the project. This may look like following:
![Add Application](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/add_step_1.png)
1. Click on `Web` button (as we are using Firebase for a web application. If you are using Firebase for any other type of application, you can choose respective option).
2. Enter a nickname for your application and click `Register App` button. 
![](https://github.com/HussainIslam/ecommerce_react/blob/master/src/firebase/screenshots/add_app_step_2.png)
3. You will provided some information that you can use in your application to connect to Firebase. The information may look like:
```javascript
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBu2Gs8JsT9Ty8pcXJQqX2vT1WE39fOhV8",
    authDomain: "testing-82de8.firebaseapp.com",
    databaseURL: "https://testing-82de8.firebaseio.com",
    projectId: "testing-82de8",
    storageBucket: "testing-82de8.appspot.com",
    messagingSenderId: "668326725264",
    appId: "1:668326725264:web:253edcfd74c13cc2597a15",
    measurementId: "G-RV7SD9QHYS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
```
5. Now, you have registered your application with your Firebase project. You will need the `firebaseConfig` section from the above code.
```javascript
{
    apiKey: "AIzaSyBu2Gs8JsT9Ty8pcXJQqX2vT1WE39fOhV8",
    authDomain: "testing-82de8.firebaseapp.com",
    databaseURL: "https://testing-82de8.firebaseio.com",
    projectId: "testing-82de8",
    storageBucket: "testing-82de8.appspot.com",
    messagingSenderId: "668326725264",
    appId: "1:668326725264:web:253edcfd74c13cc2597a15",
    measurementId: "G-RV7SD9QHYS"
};
```
## Adding Firebase and Google Authenticator to Project
1. Add Firebase to your project dependencies using the following command:
   * For NPM:<br> `npm install --save firebase`
   * For Yarn:<br> `yarn add firebase`
2. Create a new file that will hold the Firebase methods. In my project, I named that file `firebase.utils.js`
3. Import Firebase into the file<br>
    `import firebase from 'firebase/app'`
4. Import `firestore` to use database<br>
    `import 'firebase/firestore'`
5. Import `auth` library to use authentication features<br>
    `import 'firebase/auth'`
6. Create a constant to hold the configeration string that we got after we registered our applcation in Firebase project.
    ```javascript
    const config = {
        apiKey: "AIzaSyCoDntmZ-aVWu5t6NMl5V7djQjUSHKUJzs",
        authDomain: "ecom-react-db-ca4c9.firebaseapp.com",
        databaseURL: "https://ecom-react-db-ca4c9.firebaseio.com",
        projectId: "ecom-react-db-ca4c9",
        storageBucket: "ecom-react-db-ca4c9.appspot.com",
        messagingSenderId: "838509757324",
        appId: "1:838509757324:web:606036f217114c17d28ca9",
        measurementId: "G-J957F287Z6"
    };
    ```
7. Initialize the Firebase application with the `config`:<br>
    `firebase.initializeApp(config)`
8. Export the authentication method imported from Firebase to be used in other parts of our application:<br>
    `export const auth = firebase.auth()`
9. If you are going to use the database, also export the `firestore` that was imported:<br>
    `export const firestore = firebase.firestore()`
10. Add Google authenticator as a provider: <br>
    `const provider = new firebase.auth.GoogleAuthProvider()`
11. To prompt the user to select a Google account, we can add custom parameters to the `provider` that we just created:<br>
    `provider.setCustomParameters({ prompt: 'select_account '})`
12. Export a function that lets the user sign in with Google:<br>
    `export const signInWithGoogle = () => auth.signInWithPopup(provider);`
13. Also export the whole Firebase library, just in case we need it:<br>
    `export default firebase`
14. We also need to enable Google sign-in from our Firebase project. To do that go to the project dashboard on Firebase website.
15. Click `Authentication` from `Develop` section
16. From the main window area, click `Sign-in method`
17. Click on `Google` as we are setting up sign-in with Google account, this will expand for the options to setup Google sign-in. If you want to setup the sign-in with something else, you can also do that but in that case you will have to change respective options that we have used in previous steps.
18. Click `Enable` on the upper-right corner of the configuration window
19. Select an email address that will be used for project support and click `Save`. You should see a message that confirms the save.

## Implementing Firebase Authentication (auth library) in application

### Preserving the User State

1. Import `signInWithGoogle` in the component that is going to use it.<br>
   `import { signInWithGoogle } from "../../firebase/firebase.utils"`
2. Add the method to a button/link. In my application, I used this method in a custom button component like this:<br>
   `<CustomButton onClick={ signInWithGoogle }>Sign in with Google</CustomButton>`
3. We need to store the state of authentication in our application. For this reason, our App component has to be a `class component` that extends `React.Component`. In our App component, we also need to have some sort of variable to hold the state of the current user inside the constructor. For example:
   ```javascript
    constructor(){
        super();
        this.state = {
            currentUser: null
        }
    }
   ```
4. You need to import the `auth` library in our `App.js`<br>
    `import { auth } from "./firebase/firebase.utils";`
5. You also need to be aware of any changes in the user state, like if a user signed in or signed out. To do that we need  to call the `onAuthStateChanged` from the `auth` library, which we can put inside the `componentDidMount()` of React. The `onAuthStateChange` function will invoke a callback that takes the `user` state from the `auth` library, which will contain `displayName`, `email`, and `phone` among other properties. The `onAuthStateChanged` will create an open connection between Firebase and our application to continuously check the status of the user. You need to get this user state and set it to the state inside the `App.js`.
    ```javascript
    unsubscribeFromAuth = null;
    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{ 
            this.setState({ currentUser: user })
        });
    }
    ```
6. As the `onAuthStateChanged` creates an open connection, we need to close the connection as well. To do that we already have added a property that is holding the `onAuthStateChanged` function and call that property from `componentWillUnmount()`.
    ```javascript
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    ```
### Implementing the Sign Out feature based on Firebase
In my application I implemented the sign out feature in the following way:

1. Pass the `user` state to the component that keeps track of the user sign in/out. In my application, I implemented that inside the `Header` component. So, I passed the `user` state to the `Header` component.<br>
    `<Header currentUser={ this.state.currentUser } />`
2. In the `Header` component, first I imported the `auth` library.<br>
    `import { auth } from "../../firebase/firebase.utils"`
3. Then I destructured the `currentUser` prop in the `Header` component.
    ```js
    const Header = ({ currentUser }) => (
        //code related to the component
    )
    ```
4. For toggling between the `Sign in` and `Sign out` button, I implemented the following:
    ```js
    {
        currentUser ? 
        <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> :
        <Link className='option' to='/signin'>SIGN IN</Link>
    }
    ```
## Creating a Firestore Database

1. Go to Firebase project dashboard
2. Click `Database` from `Develop` section
3. Click `Create Database`
4. Choose one of two options and click `Enable`:
   1. Production mode: Not everyone can read-write to database
   2. Test mode: Everyone can read-write
5. Finally, we might also want create collection in our Database

## Storing Google's user information in Firestore
We need to grab the user authentication item from the `auth` library and store that into the Firestore, so that we can store user information for later use.

1. We need to create a function that receives a user authentication object and some additional data and it returns an user reference. In the function, if the `userAuth` is empty/null we return out of the function. Otherwise, we create a user reference from the `uid` of `userAuth` object. This will return the `QueryReference` to the specific document (based on the `uid`) in specific collection. Then, we created a snapshot from the user reference. If the snapshot return by the `userRef.get()` method is an invalid one (the user doesn't exist) , we destructure the object and pull out the `displayName` and `email` properties. Then we asynchronously create the user through the user reference using the `.set()` method. The creation portion is within a `try...catch` block to make sure our application doesn't break. Finally, we return the user reference from the function.

```js
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${ userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })

        }catch (error){
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}
```
2. Now that we are equiped with storing the user information, we need to call this function from the `componentDidMount()` of our `App.js`. First, we check whether the `userAuth` object exists. If it does, pass that to the `createUserProfileDocument()` method and capture the return in a user reference variable. Then we call the `onSnapshot` event listener, which will return a snapshot object. We called the `setState()` method to set the `snapshot` to `currentUser`, which is a state of the `App.js` component. If the `userAuth` doesn't exists, we simply assign that to `currentUser` state. _Note that we can extract the `id` from the snapshot object but to extract the data from the snapshot we need to call `data()` method on snapshot_

```js
componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
            this.setState({
            currentUser: {
                id: snapShot.id,
                ...snapShot.data()
            }
            })
        });
        
        } else {
        this.setState({ currentUser: userAuth })
        }
    })
}
```
## Sign-up Using Email and Password
1. In the component that is going to handle the sign-up, import `auth` and `createUserProfileDocument` from the Firebase utility file.
    `import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"`
2. Add the `state` that is going to store what the user is going to type in.
    ```js
    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    ```
3. In the form element for signing up, I invoked another method that did most of the heavy lifting. We add the function in form element like this: <br>
    `<form className='sign-up-form' onSubmit={ this.handleSubmit }>`
4. The `handleSubmit` function has to be an `async` function because it will be creating and updating the database asynchronously. Within the function, first, we need to prevent the default behavior of the `click` using `event.preventDefault()` method. Then we destructure the `this.state`. After that we need to validate that both `password` and `confirmPassword` are same before we proceed with the program. Then we need to enclose the user creation and storing process within a `try...catch` block to make sure our program doesn't break if there is an error while creating or storing the user information. Then we asynchronously call the `auth.createUserWithEmailAndPassword()` function. This function takes in two parameters `email` and `password` and returns an `user` object. After this, we need to call the `createUserProfileDocument()` method that we created in our Firebase utility file. We will pass in two parameters to the function: the user object that we just received, and the `displayName`. After this is done, we just reset the `this.state` to be blank.
_Note: Enable the Email and Password option from Firebase, like we enabled our Google Sign In option_
```js
handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword ){
        alert("Passwords don't match");
        return;
    }
    try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, { displayName });
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    } catch(error){
        console.log(error);
    }
};
```
5. In the component that handles the sign-in, we first need to import the `auth` library, like we did before.
6. We also need to implement Sign-in method to make sure user can sign-in using email and password. We can do this using the `handleSubmit()` method in the component that handles sign in. Similar the `handleSubmit()` method in sign-up, this method has to be an asynchronous function and we need to call the `preventDefault()` function at the very beginning. We then destructure the `this.state`. The main signin function that we are going to use is `auth.signInWithEmailAndPassword()`, which is enclosed in a `try...catch` block and receives two parameters: `email` and `password`. After that we reset the input fields.
```js
handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' })
    } catch (error) {
        console.log(error);
    }
    this.setState({ email: '', password: '' })
}
```