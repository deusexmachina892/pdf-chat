import { Message } from "ai/react";
import { ChatBubble } from "./chat-bubble";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export function Chat() {
    const messages: Message[] = [
        { role: "assistant", content: "test AI", id: "1"},
        { role: "user", content: "test User", id: "2"}
    ]

    const sources = [ "source 1", "source 2" ];
    return (
        <div 
            className="rounded-2xl border h-[75vh] flex flex-col justify-between"
        >
            <div className="p-6 overflow-auto">
                {messages.map(({id, role, content}: Message, i: number) => (
                    <ChatBubble 
                        key={id}
                        role={role}
                        content={content}
                        sources={ role !== "assistant" ? [] : sources}
                    />
                    ))
                }
            </div>
            
            <form className="p-4 flex clear-both">
                <Input placeholder={"Type to chat with AI..."} className="mr-2"/>
                
                <Button type="submit" className="w-24">
                    Ask
                </Button>
            </form>
        </div>
    )
}   