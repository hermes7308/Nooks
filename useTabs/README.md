# @cooks/use-tabs

React Hook to update your document's tabs
``` 
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
                return <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
            })}
        <div>{contentItem.content}</div>
    </div>
    );
} 
```