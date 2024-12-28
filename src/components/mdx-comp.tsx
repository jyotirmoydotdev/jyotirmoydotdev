'use client'

import { Clipboard } from 'lucide-react';
import React, { useState } from 'react';
import { TbBrandGolang } from "react-icons/tb";
import { CiText } from "react-icons/ci";
import { TbJson } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { SiGnubash } from "react-icons/si";
import Link from 'next/link';

export const CopyButton = ({ content }: { content: string }) => {
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
      className="flex gap-2 text-xs items-center px-2 py-1.5 bg-blue-500 text-white hover:scale-105 rounded hover:bg-blue-600 transition"
      onClick={handleCopy}
    >
      Copy
      <span className="relative flex items-center">
        <Clipboard
          className={`size-4 transition-transform duration-300 ${copied ? 'scale-0' : 'scale-100'}`}
        />
        <TiTick
          className={`size-4 absolute transition-transform duration-300 ${copied ? 'scale-100' : 'scale-0'}`}
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
      case "json":
        return <TbJson className=' size-[2rem]' />
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


export const ContentComp = ({ contents }: { contents: { url: string, title: string }[] }) => {
  return (
    <div className="flex flex-col gap-2 pt-2 text-sm text-gray-500">
      {
        contents.map((content, i) => (
          <Link
            key={i}
            href={content.url}
            className="text-gray-500 hover:text-black pb-1 hover:underline transition-all text-sm hover:pl-2 dark:hover:text-white"
          >
            {content.title}
          </Link>
        ))
      }
    </div>
  )
}