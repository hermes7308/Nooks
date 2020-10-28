# @cooks/use-scroll

React Hook to update your document's scroll
```
example) useScroll.js

const App = () => {
    const {y} = useScroll();
    return (
        <div className="App" style={{height: "1000vh"}}>
            <h1 style={{position:"fixed", color: y < 100 ? "blue" : "red"}}>Hi</h1>
        </div>
    );
};
```