/* 
example) useBeforeLeave.js

const App = () => {
    const begForLife = () => console.log("Please don't leave");
    useBeforeLeave(begForLife);
    return (
        <button onClick={enablePrevent}>Prevent</button>
        <button onClick={disablePrevent}>Unprevent</button>
    );
};
 */
import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        /*
        Tip)

        const { clientY } = event;
        if (clientY <= 0) {
            onBefore(event);
        } 
        */
        onBefore(event);
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return document.removeEventListener("mouseleave", handle);
    }, []);
};