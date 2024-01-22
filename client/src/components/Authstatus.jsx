import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

const AuthStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      // Unsubscribe from the observer when the component unmounts.
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? (
        <div>
          Welcome, {user.displayName}!
          <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          Not signed in.
        </div>
      )}
    </div>
  );
};

