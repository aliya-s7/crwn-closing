import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import { 
           getFirestore,
           doc, 
           getDoc,
           setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA67-A2IeM3hAPwpTvGX9fDeewmXhgQM8E",
    authDomain: "crwn-db-e16f5.firebaseapp.com",
    projectId: "crwn-db-e16f5",
    storageBucket: "crwn-db-e16f5.appspot.com",
    messagingSenderId: "719373571685",
    appId: "1:719373571685:web:28214cab0f8a873436188c"
  };

  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log('ref', userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      console.log('snap', userSnapshot);

        if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt
                });
            } catch (error) {
                console.log('error creating the user', error.message);
            }
        }

        return userDocRef;

  }