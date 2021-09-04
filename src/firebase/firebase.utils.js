import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD34hYkB8hY3W-MBtVOEX7Mn-YvGgFLNYk',
  authDomain: 'crwn-db-7fbd0.firebaseapp.com',
  projectId: 'crwn-db-7fbd0',
  storageBucket: 'crwn-db-7fbd0.appspot.com',
  messagingSenderId: '634447897468',
  appId: '1:634447897468:web:5bb28921e8d4fdb9f87af9',
  measurementId: 'G-QL1WZ1W29Z',
};

const app = initializeApp(config);

const provider = new GoogleAuthProvider();
export const auth = getAuth();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
