'use client';

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Button from "../custom/Button";
import { useRouter } from "next/navigation";


export default function TimelineDemo() {

    const router = useRouter();

    const data = [
        {
            title: "/stations/borivali.png",
            content: (
                <div className="flex flex-col items-start justify-center gap-9">
                    <h1 className="text-3xl   font-bold text-black dark:text-neutral-500">Registration Starts</h1>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium ">
                        Registrations for <span className='text-sky-900'>UNPLUGGED 2.0</span> will be open from 12<sup>th</sup> January to 31<sup>st</sup>January 2025. <br />Take the first step with a 20% preview of the problem statement to ignite your ideas.

                    </p>

                    <Button label="Register Now" handler={() => router.push("https://unstop.com/p/unplugged-20-a-24-hour-hardware-hackathon-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering--1312122")}/>

                </div>
            ),
        },
        {
            title: "/stations/andheri.png",
            content: (
                <div className="flex flex-col items-start justify-center gap-9">
                    <h1 className="text-3xl font-bold text-black dark:text-neutral-500">Round 1: PPT Submission </h1>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Don’t miss the deadline on 31<sup>st</sup> January 2025!

                    </p>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Teams must submit a well-crafted PPT that clearly presents their approach & solution. This submission is critical to secure your spot in the next stage of this electrifying hackathon.
                    </p>
                </div>
            ),
        },
        {
            title: "/stations/dadar.png",
            content: (
                <div className="flex flex-col items-start justify-center gap-9">
                    <h1 className="text-3xl font-bold text-black dark:text-neutral-500">Round 2: The First Challenge Awaits </h1>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Round 2 beings on 8<sup>th</sup> March 2025, all shortlisted teams from Round 1 must report at 8:00 AM sharp to the venue to take on a task designed around the problem statement. <br />

                    </p>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        The top-performing teams will advance to the grand finale!
                    </p>
                </div>
            ),
        },
        {
            title: "/stations/churchgate.png",
            content: (
                <div className="flex flex-col items-start justify-center gap-9">
                    <h1 className="text-3xl   font-bold text-black dark:text-neutral-500">Round 3: Demo Presentations & Mentoring</h1>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        The ultimate stage awaits on 9<sup>th</sup> March 2025. Teams will present live demos of their innovative solutions and gain valuable insights from mentoring sessions.


                    </p>
                    <p className="text-black-800 dark:text-neutral-200 text-lg  font-medium mb-8">
                        Results will be announced after 4:00 PM.
                    </p>

                </div>
            ),
        },
    ];
    return (

        <div className="w-full " id="timeline">
            <Timeline data={data} />
        </div>
    );
}
