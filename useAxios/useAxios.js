/* 
example) useAxios.js

const App = () => {
    const { loading, data, error, refetch } = useAxios({ url:"https://yts.am/api/v2/list_movies.json" });
    console.log(`Loading: ${loading}\nData: ${JSON.stringfy(data)}\nError: ${error}`);
    return (
        <div className="App" style={{height: 1000vh}}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};
 */
import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    if (!opts.url) {
        return;
    }
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    useEffect(() => {
        axiosInstance(opts)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data: data
                })
            })
            .catch(error => {
                setState({
                    ...state,
                    loading: false,
                    error: error
                })
            });
    }, [trigger]);
    return { ...state, refetch };
}