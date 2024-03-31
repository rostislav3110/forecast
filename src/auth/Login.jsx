
import { useState, useEffect } from 'react';
import {GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase'; 
import s from "../style/headerstyle.module.css";
function Login() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    const handleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setUser(user);
        })
        .catch((error) => {
          console.error("Error signing in: ", error);
        });
    };
  
    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          console.log("User signed out successfully.");
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    };
  
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {user ? (
          <>
            <img src={user.photoURL} alt="avatar" className={s.user_icon} onClick={handleLogout} />
          </>
        ) : (
          <button type="button" className={s.auth} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    );
  }

export default Login;
