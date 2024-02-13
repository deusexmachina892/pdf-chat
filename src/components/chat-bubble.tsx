import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { formattedSourceText } from "@/lib/utils";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

interface ChatBubbleProps extends Partial<Message>{
    sources: string[];
}

const wrapText = (text: string) => (
    text.split("\n").map((line: string, i: number) => (
        <span key={i}>
            {line}
            <br />
        </span>
)))

export function ChatBubble({
    role = "assistant",
    content,
    sources,
}: ChatBubbleProps) {
    if(!content) {
        return null;
    }

    const wrappedText = wrapText(content);
    const isRoleAssistant: boolean = role === "assistant";

    return(
        <div>
            <Card className="mb-2">
                <CardHeader>
                    <CardTitle
                        className={
                           isRoleAssistant ?
                            'text-blue-500 dark:text-blue-200'
                            : 'text-amber-500: text-amber-200'
                        }
                    >
                        {isRoleAssistant ? "AI": "You" }
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <Balancer>
                        {wrappedText}
                    </Balancer>
                </CardContent>
                <CardFooter>
                    <CardDescription className="w-full">
                        {sources?.length? (
                            <Accordion type="single" collapsible className="w-full">
                                {
                                    sources.map((source: string, i: number) => (
                                        <AccordionItem value={`source-${i}`} key={i}>
                                            <AccordionTrigger>
                                                {`Source ${i + 1}`}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ReactMarkdown>
                                                    {formattedSourceText(source)}
                                                </ReactMarkdown>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))
                                }
                            </Accordion>
                        ) : (
                            <></>
                        )}
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}