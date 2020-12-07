import { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from '../config/fire-config';

const authContext = createContext({ user: {} });
const { Provider } = authContext;

export const useAuth = () => useContext(authContext);

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const createUser = (userL) =>
    db
      .collection('users')
      .doc(userL.uid)
      .set(userL)
      .then(() => {
        setUser(userL);
        return userL;
      })
      .catch((error) => ({ error }));

  const signUp = ({
    firstName,
    lastName,
    username,
    email,
    password,
    country,
    state,
    phoneNumber,
    referralCode,
    investmentAmount,
    mtiLink,
  }) =>
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) =>
        // auth.currentUser.sendEmailVerification();
        createUser({
          uid: response.user.uid,
          firstName,
          lastName,
          username,
          email,
          country,
          state,
          phoneNumber,
          referralCode,
          investmentAmount,
          mtiLink,
        })
      )
      .catch((error) => ({ error }));

  const getUserAdditionalData = (userL) =>
    db
      .collection('users')
      .doc(userL.uid)
      .get()
      .then((userData) => {
        if (userData.data()) {
          setUser(userData.data());
        }
      });

  const signIn = ({ email, password }) =>
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        getUserAdditionalData(response.user);
        return response.user;
      })
      .catch((error) => ({ error }));

  const handleAuthStateChanged = (userL) => {
    setUser(userL);
    if (userL) {
      getUserAdditionalData(userL);
    }
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

    return () => unsub();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db
        .collection('users')
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()));
      return () => unsubscribe();
    }
  }, [user]);

  const signOut = () => auth.signOut().then(() => setUser(false));

  const sendPasswordResetEmail = (email) =>
    auth.sendPasswordResetEmail(email).then((response) => response);

  return {
    user,
    signUp,
    signIn,
    signOut,
    sendPasswordResetEmail,
  };
};

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{children}</Provider>;
}
