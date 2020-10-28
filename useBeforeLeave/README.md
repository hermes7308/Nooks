# @cooks/use-before-leave

React Hook to update your document's before-leave
```
example) useBeforeLeave.js

const App = () => {
    const begForLife = () => console.log("Please don't leave");
    useBeforeLeave(begForLife);
    return (
            <h1>Hello World</h1>
    );
};
```