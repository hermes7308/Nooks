/* 
example) useTitle.js

const App = () => {
    const titleUpdate = useTitle("Loading...");
    setTimeout(() => titleUpdate("Home"), 5000);
    return (
        <h1>Hi</h1>
    );
} 
*/
import { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};