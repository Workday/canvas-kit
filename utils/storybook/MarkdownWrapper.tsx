import * as React from 'react';
import 'github-markdown-css';
import EmojiConvertor from 'emoji-js';
import Markdown from 'markdown-to-jsx';

const emoji = new EmojiConvertor();

interface MarkdownWrapperProps {
  content: string;
}

export default class MarkdownWrapper extends React.Component<MarkdownWrapperProps> {
  render() {
    const ConvertedContent = emoji.replace_colons(this.props.content);

    return <Markdown class="markdown-body">{ConvertedContent}</Markdown>;
  }
}
