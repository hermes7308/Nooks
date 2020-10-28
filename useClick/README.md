# @cooks/use-click

React Hook to update your document's click
```
example) useClick.js

const App = () => {
    const sayHello = () => console.log("Hello World");
    const title = useClick(sayHello);
    return (
        <h1 ref={title}>Hi</h1>
    );
};
```