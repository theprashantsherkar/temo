import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"


function AnswerOfFaq({ question, answer }: FaqType) {

    return (
        <AccordionItem value="item-1">
            <AccordionTrigger>{ question}</AccordionTrigger>
            <AccordionContent>
               {answer}
            </AccordionContent>
        </AccordionItem>
    )
}

export default AnswerOfFaq

type FaqType = {
    question: string,
    answer: string,
}