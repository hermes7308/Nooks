/* 
example) usePreventLeave.js

const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <button onClick={enablePrevent}>Prevent</button>
        <button onClick={disablePrevent}>Unprevent</button>
    );
};
 */
export const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
}