'use client'

import { Clipboard } from 'lucide-react';
import React, { useState } from 'react';
import { TbBrandGolang, TbBrandCpp, TbSql } from "react-icons/tb";
import { CiText } from "react-icons/ci";
import { TbJson } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { SiGnubash } from "react-icons/si";
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/mtabs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CopyButton = ({ content, text='Copy' }: { content: string, text?:string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Modern Clipboard API
      navigator.clipboard.writeText(content).then(() => {
        showCopySuccess();
      }).catch((err) => {
        console.error('Failed to copy using Clipboard API:', err);
      });
    } else {
      // Fallback for unsupported browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        textarea.style.position = 'fixed'; // Avoid scrolling to bottom
        textarea.style.opacity = '0'; // Invisible to user
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy'); // Fallback method
        document.body.removeChild(textarea);
        showCopySuccess();
      } catch (err) {
        console.error('Fallback copy method failed:', err);
      }
    }
  };

  const showCopySuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Reset after 1 second
  };

  return (
    <button
      className="flex gap-2 text-xs items-center px-2 py-1.5 overflow-hidden text-white hover:scale-105 rounded transition"
      onClick={handleCopy}
    >
      {text}
      <span className="relative flex items-center">
        <Clipboard
          className={`size-4 text-[#ffa500] transition-transform duration-300 ${copied ? 'scale-0' : 'scale-100'}`}
        />
        <TiTick
          className={`size-4 text-[#ffa500] absolute transition-transform duration-300 ${copied ? 'scale-100' : 'scale-0'}`}
        />
      </span>
    </button>
  );
};


export const CodeIcon = ({ lang }: { lang: string }) => {
  const Icon = () => {
    switch (lang) {
      case "go":
        return <TbBrandGolang className=' size-[2.5rem]' />
      case "cpp":
        return <TbBrandCpp className=' size-[1.5rem]' />
      case "json":
        return <TbJson className=' size-[2rem]' />
      case "sql":
        return <TbSql className=' size-[2rem]' />
      case "text":
        return <><CiText className=' size-[1rem]' />Text</>
      case "bash":
        return <><SiGnubash className=' size-[1.5rem]' /> Bash</>
      default:
        return lang
    }
  }
  return (
    <span className='flex gap-2 items-center'>
      <Icon />
    </span>
  );
};

export const ContentComp = ({ contents }: { contents: (string | string[])[] }) => {
  const convert = (title: string) => {
    return `#${title.toLowerCase().replaceAll(" ", "-")}`;
  };

  return (
    <div className="flex flex-col gap-2 text-sm text-gray-500">
      {contents.map((content, i) => {
        if (typeof content === "string") {
          return (
            <Link
              key={i}
              href={convert(content)}
              className="text-gray-500 hover:text-black pb-1 hover:underline transition-all text-sm hover:pl-2 dark:hover:text-white"
            >
              {content}
            </Link>
          );
        } else if (Array.isArray(content)) {
          return (
            <div key={i} className="ml-4 flex flex-col gap-2">
              {content.map((link, j) => (
                <Link
                  key={`${i}-${j}`} // Ensure unique key for nested links
                  href={convert(link)}
                  className="text-gray-500 hover:text-black pb-1 hover:underline transition-all text-sm hover:pl-2 dark:hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

export const CodeBlock = ({ codes }: {
  codes: {
      language: string,
      code: string
  }[]
}) => {
  const [code, setCode] = React.useState(codes[0].code)
  return (
      <Tabs defaultValue={codes[0].language}>
          <div className="flex gap-2 items-center ">
              <CopyButton content={code} />
              <TabsList>
                  {
                      codes.map((code, j) => (
                          <div
                              onClick={() => (setCode(code.code))}
                              key={j}
                          >
                              <TabsTrigger
                                  className=' capitalize' value={code.language}
                              >
                                  {code.language}
                              </TabsTrigger>
                          </div>
                      ))
                  }
              </TabsList>
          </div>
          {
              codes.map((code, j) => (
                  <TabsContent value={code.language} key={j}>
                      <SyntaxHighlighter
                          language={code.language || 'text'}
                          style={atomDark}
                          PreTag="div"
                          className="font-bold text-xs"
                          customStyle={{
                              borderRadius: 10
                          }}
                      >
                          {code.code}
                      </SyntaxHighlighter>
                  </TabsContent>
              ))
          }
      </Tabs>
  )
}