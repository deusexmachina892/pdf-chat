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
]