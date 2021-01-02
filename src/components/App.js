import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    console.log(isLoggedIn);
    return <AppRouter isLoggedIn={ isLoggedIn }/>;
}

export default App;
