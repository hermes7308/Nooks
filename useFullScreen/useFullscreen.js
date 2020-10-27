/* 
example) useFullscreen.js

const App = () => {
    const onFullScreen = (isFull) => { console.log(isFull ? "We are full." : "We are not full.") };
    const { element, triggerFull, exitFull, onFullScreen } = useFullscreen(onFullScreen);
    return (
        <div className="App" style={{height: 1000vh}}>
            <div>
                <img ref={element} src="https://image.good.com/...."/>
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
};
 */
import { useRef } from "react";

export const useFullscreen = (callback) => {
    const element = useRef();
    const runCallback = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullScreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullScreen();
            }
            runCallback(true);
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullScreen) {
            document.msExitFullScreen();
        }
        runCallback(false);
    };
    return { element, triggerFull, exitFull };
};