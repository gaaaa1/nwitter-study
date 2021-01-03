import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [init, setInit] = useState(false);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
            setInit(true);
        });
    },[]);

    return (
        <>
            { init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
        </>
    );
}

export default App;
