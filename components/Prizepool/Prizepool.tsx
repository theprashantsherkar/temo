'use client';
import Badge from "../custom/Badge";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import "aos/dist/aos.css";

export default function Prizepool() {
    const images = [
        "/prizepoolBg1.jpg",
        "/prizepoolBg2.jpg",
        "/prizepoolBg3.jpg",
    ];

    return (
        <ImagesSlider images={images}>
            <div className="prizepool  sm:h-screen h-min z-50  py-5 text-white   flex gap-6 flex-col items-center justify-center " id="prizepool">
                <h1 className="text-4xl text-white  pt-7 font-extrabold glitch   ">Prizepool</h1>
                <div>
                    <Badge label="INR 50,000" image="/prize/first.png" />
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-center gap-6 sm:gap-12">
                    <div>
                        <Badge label="INR 30,000" image="/prize/second.png" />
                    </div>
                    <div>
                        <Badge label="INR 20,000" image="/prize/third.png" />
                    </div>
                </div>
            </div>
        </ImagesSlider>
    );
};