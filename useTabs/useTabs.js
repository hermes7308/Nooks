/* 
example) useTab.js

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of Section 2"
    },
];
const App = () => {
    const { contentItem, changeItem } = useTabs(0, content);
    return (
        <div className="App">
            {content.map((section, index) => {
                <button onChange={() => changeItem(index)}>{section.tab}</button>
            })}
        <div>{contentItem.content}</div>
    </div>
    );
} 
*/
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
}