const startingText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Here is a code, \`<span></span>\`, between 2 backticks.

\`\`\`
// this one with triple backticks is multi-line code:

function anotherExample(firstLine, lastLine) {
  if ((firstLine === '\`\`\`') && (lastLine === '\`\`\`')) {
    return multiLineCode;
  }
}
\`\`\`
  
Here is a text **bold**... cool ha!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~please don't cross me off~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...

Let us not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)
`;

export default startingText;
