/* 
example) useNetwork.js

const App = () => {
    const handleOnChange = (online) => {
        console.log(online ? "We just went online." : "We are offline.");
    }
    const onLine = useNetwork();
    return (
        <div className="App">
            <h1>{onLine ? "Online" : "OffLine"}</h1>
        </div>
    );
};
 */
import { useState, useEffect } from "react";

export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, []);
    return status;
};