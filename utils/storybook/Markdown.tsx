import emojijs from 'emoji-js';
import 'github-markdown-css';
import MarkdownToJSX from 'markdown-to-jsx';
import * as React from 'react';

const emoji = new emojijs.EmojiConvertor();

interface MarkdownProps {
  content: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
  render() {
    const convertedContent = emoji.replace_colons(this.props.content);

    return <MarkdownToJSX>{convertedContent}</MarkdownToJSX>;
  }
}
