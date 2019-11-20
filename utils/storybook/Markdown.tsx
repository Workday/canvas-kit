import * as React from 'react';
import 'github-markdown-css';
import EmojiConvertor from 'emoji-js';
import MarkdownToJSX from 'markdown-to-jsx';

const emoji = new EmojiConvertor();

interface MarkdownProps {
  content: string;
}

export default class Markdown extends React.Component<MarkdownProps> {
  render() {
    const ConvertedContent = emoji.replace_colons(this.props.content);

    return <MarkdownToJSX className="markdown-body">{ConvertedContent}</MarkdownToJSX>;
  }
}
