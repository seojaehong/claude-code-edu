"use client";

import { useState } from "react";
import { Copy, Check, MessageCircle, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatExampleProps {
  messages: ChatMessage[];
  title?: string;
  className?: string;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
      title="프롬프트 복사"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-500" />
      ) : (
        <Copy className="h-3.5 w-3.5 text-muted-foreground" />
      )}
    </button>
  );
}

export function ChatExample({ messages, title, className }: ChatExampleProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden my-6",
        className
      )}
    >
      {title && (
        <div className="px-4 py-2 bg-muted/50 border-b border-border">
          <span className="text-xs font-medium text-muted-foreground">
            {title}
          </span>
        </div>
      )}
      <div className="p-4 space-y-4">
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} className="flex gap-3">
              <div className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-primary mb-1 block">
                  나
                </span>
                <div className="group relative rounded-lg bg-primary/5 dark:bg-primary/10 px-3 py-2 border border-primary/10">
                  <p className="text-sm text-foreground whitespace-pre-wrap pr-6">
                    {msg.content}
                  </p>
                  <CopyButton text={msg.content} />
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex gap-3">
              <div className="shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                <Bot className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-muted-foreground mb-1 block">
                  Claude
                </span>
                <div className="rounded-lg bg-muted/50 px-3 py-2 border border-border">
                  <p className="text-sm text-foreground/80 whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
