import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import type { CodeProps, ComponentPropsWithoutRef, HeadingProps } from 'react-markdown/lib/ast-to-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import latex from 'react-syntax-highlighter/dist/cjs/languages/prism/latex';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import { MarkdownProps } from '@/types/types';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('latex', latex);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('typescript', typescript);

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Markdown = ({ content }: MarkdownProps) => {
  const MarkdownComponents = {
    h1({ children, ...props }: HeadingProps) {
      return (
        <h1
          {...props}
        >{children}</h1>
      );
    },
    h2({ children, ...props }: HeadingProps) {
      return (
        <h2
          {...props}
        >{children}</h2>
      );
    },
    p({ children, ...props }: ComponentPropsWithoutRef<`p`>) {
      return (
        <p
          {...props}
        >{children}</p>
      );
    },
    img({ src, ...props }: ComponentPropsWithoutRef<`img`>) {
      if (src == undefined) src = '';
      return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img style={{ width: '50%' }} src={src} {...props} />
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    code({ node, inline, className, children, style, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, '')}
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <StyledDiv>
      <ReactMarkdown
        components={MarkdownComponents}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </StyledDiv>
  );
};

export default Markdown;
