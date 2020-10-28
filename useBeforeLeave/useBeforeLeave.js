import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        /*
        Tip)

        const { clientY } = event;
        if (clientY <= 0) {
            onBefore(event);
        } 
        */
        onBefore(event);
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => {
            document.removeEventListener("mouseleave", handle)
        };
    }, []);
};