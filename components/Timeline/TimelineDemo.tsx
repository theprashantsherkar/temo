import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
    const data = [
        {
            title: "Registration Starts",
            content: (
                <div>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Registrations for <span className='text-sky-900'>UNPLUGGED 2.0</span> will be open from 12th January to 11th February 2025. <br />Take the first step with a 20% preview of the problem statement to ignite your ideas.

                    </p>
                    <div className="">
                        <button className="bg-blue-600 text-white font-semibold py-3 px-5 rounded-md">
                            Register now!
                        </button>
                    </div>
                </div>
            ),
        },
        {
            title: "Round 1: PPT Submission ",
            content: (
                <div>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Don’t miss the deadline on 14th February 2025!

                    </p>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Teams must submit a well-crafted PPT that clearly presents their approach& solution. This submission is critical to secure your spot in the next stage of this electrifying hackathon.
                    </p>
                </div>
            ),
        },
        {
            title: "Round 2: The First Challenge Awaits",
            content: (
                <div>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Round 2 beings on 8th March 2025, all shortlisted teams from Round 1 must report at 8:00 AM sharp to the venue to take on a task designed around the problem statement. <br />
                       
                    </p>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        The top-performing teams will advance to the grand finale!
                    </p>
                </div>
            ),
        },
        {
            title: "Round 3: Demo Presentations & Mentoring",
            content: (
                <div>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        The ultimate stage awaits on 9th March 2025. Teams will present live demos of their innovative solutions and gain valuable insights from mentoring sessions. 


                    </p>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Results will be announced after 4:00 PM.
                    </p>
                   
                </div>
            ),
        },
    ];
    return (
        <div className="w-full timelineBg" id="timeline">
            <Timeline data={data} />
        </div>
    );
}
