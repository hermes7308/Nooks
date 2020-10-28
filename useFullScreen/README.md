# @cooks/use-fullscreen

React Hook to update your document's fullscreen
```
example) useFullscreen.js

const App = () => {
    const onFullScreen = (isFull) => { console.log(isFull ? "We are full." : "We are not full.") };
    const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
    return (
        <div className="App" style={{height: "1000vh"}}>
            <div>
                <img ref={element} src="https://image.good.com/...."/>
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
};
```