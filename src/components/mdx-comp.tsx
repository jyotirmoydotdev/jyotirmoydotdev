'use client'

import { Clipboard } from 'lucide-react';
import React, { useState } from 'react';
import { TbBrandGolang, TbBrandCpp, TbSql, TbBrandPython } from "react-icons/tb";
import { CiText } from "react-icons/ci";
import { TbJson } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { SiGnubash } from "react-icons/si";
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/mtabs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RiJavascriptFill } from 'react-icons/ri';
import { PiFileCssBold } from "react-icons/pi";
import { TbFileTypeXml } from "react-icons/tb";

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
      case "py":
        return <><TbBrandPython className=' size-[1.5rem]' /> Python</>
      case "python":
        return <><TbBrandPython className=' size-[1.5rem]' /> Python</>
      case "javascript":
        return <><RiJavascriptFill className=' size-[1.5rem]'/>JavaScript</>
      case "css":
        return <><PiFileCssBold className=' size-[1.5rem]'/>CSS</>
      case "xml":
        return <><TbFileTypeXml className=' size-[1.5rem]'/></>
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

export const Complex = ({t,s}:{t:string,s:string}) => {
  const check = (c:string) => {
    switch (c) {
      case 'logn':
        return 'Log n'
      case 'nlogm':
        return 'N Log M'
      case '1':
        return '1'
      case 'n':
        return 'N'
      case 'n^2':
        return 'N²'
      default:
        return ''
    }
  }
  return (
      <div className=' max-w-[578.4px] w-full pb-5'>
          <div className=" grid grid-cols-2 bg-muted shadow-sm rounded-md p-2">
              <div className=" p-4 flex flex-col gap-5 w-full text-center">
                  <div className="  text-sm sm:text-base italic font-serif">Time Complexity <span className=" font-bold">O({check(t)})</span></div>
                  <div className=" border-b border-l border-muted-foreground/50 mx-[1em] sm:mx-[2em] mb-[1.5rem] rounded-bl-md overflow-hidden ">
                      <svg width="130" height="130" className=' w-full h-full' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                          <path id="Path" fill="none" stroke="#b6b5b5"  className={`${t==='logn'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 49 1000 C 126.597893 815.457703 1000 783 1000 783 L 1000 784.02356" />
                          <path id="path1" fill="none" stroke="#b6b5b5" className={`${t==='nlogm'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 995 C 1 995 64.10157 952.14325 86 921 C 125.304733 865.102051 149.733139 769.359253 176 687 C 247.854172 461.702454 353 0 353 0" />
                          <path id="Line" fill="none" stroke="#b6b5b5"  className={`${t==='1'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 0 945 L 999 945" />
                          <path id="path2" fill="none" stroke="#b6b5b5" className={`${t==='n'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 995 L 1000 0" />
                          {/* <path id="path4" fill="none" stroke="#b6b5b5" className={`${t===''?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 945 L 99 945 L 100 891 L 149 891 L 148 696 L 202 694 L 198 0" /> */}
                          <path id="path3" fill="none" stroke="#b6b5b5" className={`${t==='n^2'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 1000 C 120.525879 994.864197 224 0 224 0 L 224 0" />
                      </svg>
                  </div>
              </div>
              <div className=" p-4 flex flex-col gap-5 shadow-sm w-full rounded-xl text-center">
                  <div className="  text-sm sm:text-base italic font-serif">Space Complexity <span className=" font-bold">O({check(s)})</span></div>
                  <div className=" border-b border-l border-muted-foreground/50 mx-[1em] sm:mx-[2em] mb-[1.5rem] rounded-bl-md overflow-hidden ">
                      <svg width="130" height="130" className=' w-full h-full' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                      <path id="Path" fill="none" stroke="#b6b5b5"      className={`${s==='logn'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 49 1000 C 126.597893 815.457703 1000 783 1000 783 L 1000 784.02356" />
                          <path id="path1" fill="none" stroke="#b6b5b5" className={`${s==='nlogm'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 995 C 1 995 64.10157 952.14325 86 921 C 125.304733 865.102051 149.733139 769.359253 176 687 C 247.854172 461.702454 353 0 353 0" />
                          <path id="Line" fill="none" stroke="#b6b5b5"  className={`${s==='1'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 0 945 L 999 945" />
                          <path id="path2" fill="none" stroke="#b6b5b5" className={`${s==='n'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 995 L 1000 0" />
                      {/* <path id="path4" fill="none" stroke="#b6b5b5" className={`${s===''?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 945 L 99 945 L 100 891 L 149 891 L 148 696 L 202 694 L 198 0" /> */}
                          <path id="path3" fill="none" stroke="#b6b5b5" className={`${s==='n^2'?"stroke-orange-500":"stroke-muted-foreground/50"}`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M 1 1000 C 120.525879 994.864197 224 0 224 0 L 224 0" />
                      </svg>
                  </div>
              </div>
          </div>
      </div>
  )
}

export const CodeCopy = ({code}:{code:string}) => {
  return (
    <span
    className=' text-[#ffa500] bg-[#ffa5001a] py-[2px] pl-[10px] pr-[4px] font-mono text-[0.95em] items-center inline-flex rounded-sm'
    >{code} <CopyButton content={code} text=''/> </span>
  )
}