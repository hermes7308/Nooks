/* 
example) useScroll.js

const App = () => {
    const {y} = useScroll();
    return (
        <div className="App" style={{height: 1000vh}}>
            <h1 style={{psotion:fixed, color: y < 100 ? "blue" : "red"}}>Hi</h1>
        </div>
    );
};
 */
import { useState, useEffect } from "react";

export const useScroll = () => {
    const [state, setState] = useState({ x: 0, y: 0 });
    const onScroll = () => {
        setState({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};