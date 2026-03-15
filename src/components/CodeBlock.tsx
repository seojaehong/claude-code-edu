"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  children,
  language,
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative my-4 rounded-lg overflow-hidden border border-border", className)}>
      {(language || filename) && (
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <span className="text-xs text-zinc-400 font-mono">
            {filename || language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="코드 복사"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>복사됨</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>복사</span>
              </>
            )}
          </button>
        </div>
      )}
      {!language && !filename && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-700/80 px-2 py-1 rounded"
          aria-label="코드 복사"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>복사됨</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>복사</span>
            </>
          )}
        </button>
      )}
      <pre className="bg-zinc-900 p-4 overflow-x-auto text-sm md:text-sm text-xs leading-relaxed">
        <code className="font-mono text-zinc-100">{children}</code>
      </pre>
    </div>
  );
}
