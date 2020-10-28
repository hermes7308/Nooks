# @cooks/use-title

React Hook to update your document's title
```
example) useTitle.js

const App = () => {
    const titleUpdate = useTitle("Loading...");
    setTimeout(() => titleUpdate("Home"), 5000);
    return (
        <h1>Hi</h1>
    );
} 
```