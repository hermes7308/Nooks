# @cooks/use-input

React Hook to update your document's input
```
example) useInput.js

const App = () => {
    const name = useInput("Mr.", (value) => value.length <= 10);
    return (<input type="text" {...name} />);
} 
```