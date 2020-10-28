# @cooks/use-fade-in

React Hook to update your document's fade-in
```
example) useFadeIn.js

const App = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);
    return (
        <h1 {...fadeInH1}>Hello</h1>
        <p {...fadeInP}>I'm Nooks</p>
    );
};
```