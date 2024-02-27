import {
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
    signOut,
} from 'firebase/auth';

import { auth } from '../firebase/client';


export const login = ():Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export const logout = ():Promise<void> => {
    return signOut(auth);
}