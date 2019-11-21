import * as React from 'react';
import 'github-markdown-css';
import emojijs from 'emoji-js';
import MarkdownToJSX from 'markdown-to-jsx';

const emoji = new emojijs.EmojiConvertor();

interface MarkdownProps {
  content: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
  render() {
    const ConvertedContent = emoji.replace_colons(this.props.content);

    // We can remove the `div` wrapper when https://github.com/DefinitelyTyped/DefinitelyTyped/pull/40542 is merged
    return (
      <div className="markdown-body">
        <MarkdownToJSX>{ConvertedContent}</MarkdownToJSX>
      </div>
    );
  }
}
