
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { qnaList1, qnaList2 } from "./qna"

export default function Faq() {
    return (
        <div id="faq" className="flex items-center justify-center flex-col bg-black text-white w-full sm:h-screen  h-min  sm:gap-14 gap-5 py-8">
            <h2 className="text-3xl font-semibold bg-black w-full text-center  text-white">FAQ&apos;s</h2>
            <div className="faq  text-white w-full px-7  bg-black flex sm:flex-row flex-col  items-center justify-center sm:gap-16" >
                <div className="flex flex-col items-center justify-center  sm:w-1/2">
                    <Accordion type="single" collapsible className="w-full">
                        {qnaList1.map((qna) => (
                            <AccordionItem key={qna.id} value={qna.question}>
                                <AccordionTrigger className="sm:text-xl text-lg" >{qna.question}</AccordionTrigger>
                                <AccordionContent className="sm:text-xl text-sky-300 text-lg">{qna.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="flex flex-col items-center justify-center  sm:w-1/2">
                    <Accordion type="single" collapsible className="w-full">
                        {qnaList2.map((qna) => (
                            <AccordionItem key={qna.id} value={qna.question}>
                                <AccordionTrigger className="sm:text-xl text-lg">{qna.question}</AccordionTrigger>
                                <AccordionContent className="sm:text-xl text-sky-300 text-lg">{qna.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
