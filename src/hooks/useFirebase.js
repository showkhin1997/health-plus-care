import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLogin, setIsLogin] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const handleRegistration = e => {
        e.preventDefault();
    }

    const handleNameChanged = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const signInUsingEmaiAndPassword = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('password at least 6 charechter nedded');
            return;
        }
        setError('');

        isLogin ? processLogin(email, password) : cerateNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const cerateNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const toggleLoginRegister = e => {
        setIsLogin(e.target.checked);
    }

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            //     setError('');
            // })
            .catch(error => {
                setError('');
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    return {
        handleNameChanged,
        handleRegistration,
        handlePasswordChange,
        handleEmailChange,
        toggleLoginRegister,
        isLogin,
        user,
        isLoading,
        error,
        logOut,
        signInUsingGoogle,
        signInUsingEmaiAndPassword

    }
}

export default useFirebase;