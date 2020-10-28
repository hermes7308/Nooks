# @cooks/use-notification

React Hook to update your document's notification
```
example) useNotification.js

const App = () => {
    const triggerNotif = useNotification("Can I steal your kimchi?", {body: "I love kimci don't you."});
    return (
        <div className="App" style={{height: "1000vh"}}>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
};
```