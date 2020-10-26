/* 
example) useNotification.js

const App = () => {
    const triggerNotif = useNotification("Can I steal your kimchi?", {body: "I love kimci don't you."});
    return (
        <div className="App" style={{height: 1000vh}}>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
};
 */
export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission)=> {
                if (permission === "granted") {
                    new Notification(title, options);
                } else { 
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};