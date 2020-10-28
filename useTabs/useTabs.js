import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        contentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
};