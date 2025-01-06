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
        <div className="prizepool h-screen text-white bg-black flex gap-6 flex-col items-center justify-center " id="prizepool">
            <h1 className="text-3xl font-semibold oscillatey my-7">Prizepool</h1>
            <div>
                <Badge data-aos="fade-left" label="1st Prize" />
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-6 sm:gap-12">
                <div>
                    <Badge label="2nd Prize"/>
                </div>
                <div>
                    <Badge label="3nd Prize"/>
                </div>
            </div>
        </div>
    );
};