import React, { useContext, useEffect , useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [emailUser, setEmailUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const loginWithEmail = (firstName, lastName, email) => {
        window.localStorage.setItem('firstNameCalendly', firstName);
        window.localStorage.setItem('lastNameCalendly', lastName);
        window.localStorage.setItem('emailForSignIn', email);
        return auth.sendSignInLinkToEmail(email, {
            url: 'http://localhost:3000/schedule',
            handleCodeInApp: true
        });
    };

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const logout = () => {
        return auth.signOut();
    };

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    };

    const updateEmail = (email) => {
        return currentUser.updateEmail(email);
    };

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            const emailLinkSignIn = auth.isSignInWithEmailLink(window.location.href);
            if (emailLinkSignIn) {
                const email = window.localStorage.getItem('emailForSignIn');
                const firstName = window.localStorage.getItem('firstNameCalendly');
                const lastName = window.localStorage.getItem('lastNameCalendly');
                setEmailUser({ email: email, firstName: firstName, lastName: lastName });
            }
            else if (user) {
                setCurrentUser(user);
            };
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        emailUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        loginWithEmail
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

};
