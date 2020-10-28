# @cooks/use-confirm

React Hook to update your document's confirm
```
example) useConfirm.js

const App = () => {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    return (
        <button onClick={confirmDelete}>Delete the world</button>
    );
};
```