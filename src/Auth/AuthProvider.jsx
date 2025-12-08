import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase.config';

export const AuthContext = createContext()

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSignInWithGoogle = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {

                setUser(result.user)
                toast.success('Login Successful With Google')

            }).catch(() => {
                toast.error('Login Failed With Google')
            });

    }


    const signInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {

        return signOut(auth)
    }

    const updateUser = (updatedData) => {

        return updateProfile(auth.currentUser, updatedData)
    }
    useEffect(() => {
        const stableData = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            stableData()
        }
    }, [])


    const authData = {
        auth,
        createUser,
        user, setUser,
        handleSignInWithGoogle,
        signInUser,
        logOut,
        updateUser,
        loading,
        setLoading


    };
    return (<AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;