'use client';
import Badge from "../custom/Badge";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Prizepool() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 100,
        });
    });

    return (
        <div className="prizepool sm:h-screen h-min sm:py-4 py-5 text-white bg-black prizepoolBg flex gap-6 flex-col items-center justify-center " id="prizepool">
            <h1 className="text-3xl text-white font-semibold oscillatey pt-7">Prizepool</h1>
            <div>
                <Badge label="1st Prize" image="/prize/first.png" />
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-6 sm:gap-12">
                <div>
                    <Badge label="2nd Prize" image="/prize/second.png" />
                </div>
                <div>
                    <Badge label="3nd Prize" image="/prize/third.png" />
                </div>
            </div>
        </div>
    );
};