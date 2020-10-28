# @cooks/use-axios

React Hook to update your document's axios
```
example) useAxios.js

const App = () => {
    const { loading, data, error, refetch } = useAxios({ url:"https://yts.am/api/v2/list_movies.json" });
    console.log(`Loading: ${loading}\nData: ${JSON.stringify(data)}\nError: ${error}`);
    return (
        <div className="App" style={{height: "1000vh"}}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};
```