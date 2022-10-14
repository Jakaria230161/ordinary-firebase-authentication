
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from './Firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error("error:", error);
    })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
    })
  }
  return (
    <div className="App">
      {user.uid ? <button onClick={handleGoogleSignOut}>Google Sign Out</button>
        :
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }
      {
    user.uid && <div>
          <h3>User Name: {user.displayName}</h3>
          <p>Email address: {user.email}</p>
    </div>
    }
    </div>
  );
}

export default App;
