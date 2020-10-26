/* 
example) useHover.js

const App = () => {
    const onHover = () => console.log("Somebody hovered!");
    const markedRef = useHover(onHover);
    return (
        <h1 ref={markedRef}>Hello Nooks</h1>;
    );
};
 */
import { useEffect, useRef } from "react";

export const useHover = onHover => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};