/* 
example) useClick.js

const App = () => {
    const sayHello = () => console.log("Hello World");
    const title = useClick(sayHello);
    return (
        <h1 ref={title}>Hi</h1>
    );
};
 */
import { useEffect } from "react";

export const useClick = (onClick) => {
    if (typeof onClick !== "function") {
        return;
    }

    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};