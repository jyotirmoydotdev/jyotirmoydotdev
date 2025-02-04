import type { MDXComponents } from 'mdx/types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyButton, CodeIcon} from './components/mdx-comp';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        pre: ({ children }) => {
            if (!children) return null;

            const childProps = (children as React.ReactElement).props;
            const language = childProps.className
                ? childProps.className.replace('language-', '')
                : '';

            return (
                <>
                    <style>
                        {`
                          /* Remove pseudo-elements for SyntaxHighlighter */
                          .custom-syntax-highlighter pre::before,
                          .custom-syntax-highlighter pre::after,
                          .custom-syntax-highlighter code::before,
                          .custom-syntax-highlighter code::after {
                              content: none !important;
                              display: none !important;
                          }

                          pre, code {
                                width: auto !important;
                                max-width: 100%; 
                                word-wrap: break-word; 
                                white-space: pre-wrap; 
                                overflow-x: auto;
                            }

                          /* Styling for inline code */
                          .inline-code {
                              color: orange;
                              background-color: rgba(255, 165, 0, 0.1);
                              padding: 2px 4px;
                              border-radius: 4px;
                              font-family: ui-monospace, monospace;
                              font-size: 0.95em;
                          }

                          /* Remove pseudo-elements for inline code globally */
                          code.inline-code::before,
                          code.inline-code::after {
                              content: none !important;
                              display: none !important;
                          }
                        `}
                    </style>
                    <div className="custom-syntax-highlighter text-sm rounded-md">
                        <div className="flex items-center w-full justify-between px-2 text-gray-500 pt-1  ">
                            <CodeIcon lang={language}/>
                            <CopyButton content={String(childProps.children).trim()}/>
                        </div>
                        <SyntaxHighlighter
                            language={language || 'text'}
                            style={atomDark}
                            PreTag="div"
                            className="custom-syntax-highlighter"
                        >
                            {String(childProps.children).trim()}
                        </SyntaxHighlighter>
                    </div>
                </>
            );
        },
        h1: ({ children }) => {
            return <h1 className='text-3xl py-3 font-black font-sans'>{children}</h1>
        },
        h2: ({ children }) => {
            return <h2 id={String(children).toLowerCase().replace(/\s+/g, '-')}>{children}</h2>
        },
        h3: ({ children }) => {
            return <h3 id={String(children).toLowerCase().replace(/\s+/g, '-')}>{children}</h3>
        },
        a: ({ children, ...props}) => {
            return (
                <a {...props} className='text-white dark:text-blue-400' style={{ textUnderlineOffset:3, WebkitTextFillColor:"#60a5fa"}} >
                    {children}
                </a>
            )
        },
        code: ({ children }) => {
            const parentIsPreTag =
                typeof window !== 'undefined' &&
                document.querySelector('pre > code') !== null;

            // For inline code, style with proper targeting
            if (!parentIsPreTag) {
                return (
                    <>
                    <style>
                        {`
                        .inline-code {
                              color: orange;
                              background-color: rgba(255, 165, 0, 0.1);
                              padding: 2px 4px;
                              border-radius: 4px;
                              font-family: ui-monospace, monospace;
                              font-size: 0.95em;
                          }

                          /* Remove pseudo-elements for inline code globally */
                          code.inline-code::before,
                          code.inline-code::after {
                              content: none !important;
                              display: none !important;
                          }
                        `}
                    </style>
                    <code className="inline-code inline-flex items-center">
                        <span>{children}</span> <CopyButton text='' content={String(children).trim()}/>
                    </code>
                    </>
                );
            }
            return children;
        },

        ...components,
    };
}
