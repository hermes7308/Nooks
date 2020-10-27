/* 
example) useInput.js

const App = () => {
    const name = useInput("Mr.");
    return (<input type="text" {...name} />);
} 
*/
import { useState } from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const { target: { value } } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};