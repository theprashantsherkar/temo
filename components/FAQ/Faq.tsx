import AnswerOfFaq from "../custom/AnswerOfFaq";

export default function Faq() {
    return (
        <div className="faq h-screen text-white w-full  bg-black flex flex-row items-center justify-center gap-16" id="faq">
            <div className="flex flex-col items-center justify-center  w-full">
                <AnswerOfFaq question="Who can participate?" answer="The hackathon is open for Engineering students from all over India."/>
                <AnswerOfFaq question="What expenses do I need to cover?" answer="You need to cover only travel expenses. Food and accommodation will be provided during the 24 hours."/>
                <AnswerOfFaq question="How will the participants be selected?" answer="Participant Teams will be selected through the Resume Shortlisting Round."/>
            </div>
            <div className="flex flex-col items-center justify-center  w-full">
                <AnswerOfFaq question="How can I apply?" answer="The registration would be simply done by just clicking the Register button above."/>
                <AnswerOfFaq question="Can I participate as an individual?" answer="No, This is a Team Hackathon. Your Team can consist of 2 to 4 members."/>
                <AnswerOfFaq question="What if I don't know how to code?" answer="Learning to code is not required; non-technical participants can contribute ideas and domain knowledge."/>
            </div>
        </div>
    )
}