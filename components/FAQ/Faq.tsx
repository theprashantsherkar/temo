
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { qnaList1, qnaList2 } from "./qna"

export default function Faq() {
    return (
        <div className="flex items-center justify-center flex-col bg-black text-white w-full h-screen gap-8">

            <h2 className="text-3xl font-semibold bg-black w-full text-center  text-white">Frequently asked questions</h2>

            <div className="faq  text-white w-full px-7  bg-black flex flex-row items-center justify-center gap-16" id="faq">
                <div className="flex flex-col items-center justify-center  w-1/2">
                    <Accordion type="single" collapsible className="w-full">
                        {qnaList1.map((qna) => (
                            <AccordionItem key={qna.id} value={qna.question}>
                                <AccordionTrigger>{qna.question}</AccordionTrigger>
                                <AccordionContent>{qna.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="flex flex-col items-center justify-center  w-1/2">
                    <Accordion type="single" collapsible className="w-full">
                        {qnaList2.map((qna) => (
                            <AccordionItem key={qna.id} value={qna.question}>
                                <AccordionTrigger>{qna.question}</AccordionTrigger>
                                <AccordionContent>{qna.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
