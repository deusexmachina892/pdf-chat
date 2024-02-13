import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Message } from "ai/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formattedSourceText(inputText: string) {
  return inputText
    .replace(/\n+/g, " ") // Replace multiple consecutive new lines with a single space
    .replace(/(\w) - (\w)/g, "$1$2") // Join hyphenated words together
    .replace(/\s+/g, " "); // Replace multiple consecutive spaces with a single space
}

export function delay(timeInMs: number) {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
}

// Default UI Message
export const initialMessages: Message[] = [
  {
    role: "assistant",
    id: "0",
    content: "Hi! I am your assistant. I am happy to help with your questions about your source document."
  }
];

export function scrollToEnd(containerRef: React.RefObject<HTMLElement>) {
  if(containerRef.current) {
    const lastMessage = containerRef.current.lastElementChild;
    if(lastMessage) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "end"
      };
      lastMessage.scrollIntoView(scrollOptions);
    }
  }
}

export interface Data {
  sources: string[]; // Replace 'any' with a more specific type if possible
}
// source mapper
export const getSources = (data: any, role: string, index: number) => {
  if (role === "assistant" && index >= 2 && (index % 2 === 0)) {
    const sourceIndex = (index - 2)/2;
    if (data[sourceIndex] && data[sourceIndex].sources) {
      return data[sourceIndex].sources;
    }
  }

  return [];
}