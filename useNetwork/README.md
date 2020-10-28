# @cooks/use-network

React Hook to update your document's network
``` 
example) useNetwork.js

const App = () => {
    const handleOnChange = (online) => {
        console.log(online ? "We just went online." : "We are offline.");
    }
    const onLine = useNetwork(handleOnChange);
    return (
        <div className="App">
            <h1>{onLine ? "Online" : "OffLine"}</h1>
        </div>
    );
};
```