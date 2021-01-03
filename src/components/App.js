import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
    const [isLoggedIn, setLoggedIn] = useState(authService.currentUser);
    console.log(authService.currentUser);
    return <AppRouter isLoggedIn={ isLoggedIn }/>;
}

export default App;
