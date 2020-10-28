# @cooks/use-hover

React Hook to update your document's hover
```
example) useHover.js

const App = () => {
    const onHover = () => console.log("Somebody hovered!");
    const markedRef = useHover(onHover);
    return (
        <h1 ref={markedRef}>Hello Nooks</h1>;
    );
};
```