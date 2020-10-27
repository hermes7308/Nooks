/* 
example) useConfirm.js

const App = () => {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    return (
        <button onClick={confirmDelete}>Delete the world</button>
    );
};
 */
export const useConfirm = (message, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};