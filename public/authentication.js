const email = document.getElementById('email');
const pass  = document.getElementById('pass');
let signup = ()=>{
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then(result =>{
        console.log('SignUp successfully',result)
    })
    .catch(function(error) {        
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);        
      });
}

let signin = ()=>{
    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
    .then(result =>{
        window.location.replace('todoapp.html');
        console.log('SignIn successfully',result)
    })
    .catch(function(error) {        
        var errorCode = error.code;
        var errorMessage = error.message;      
        alert(errorMessage);
      })
}
let googleSignin = ()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        window.location.replace('todoapp.html');
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log('The signed-in user info.',user)
      })
      .catch(function(error) {      
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log('Email of user',email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('firebase.auth.AuthCredential',credential);
      });
}
