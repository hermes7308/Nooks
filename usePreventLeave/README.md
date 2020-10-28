# @cooks/use-prevent-leave

React Hook to update your document's prevent leave
```
example) usePreventLeave.js

const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <button onClick={enablePrevent}>Prevent</button>
        <button onClick={disablePrevent}>Unprevent</button>
    );
};
```