'use client';
import Badge from "../custom/Badge";
import React, { useEffect } from "react";
import { ImagesSlider } from "../ui/images-slider";
import "aos/dist/aos.css";

export default function Prizepool() {
    const images = [
        "/threeCollage.jpg",
        "/timelinebg2.jpg",
        "/bridge.jpg",
    ]

    return (
        <ImagesSlider images={images}>
            <div className="prizepool  sm:h-screen h-min z-50  py-5 text-white   flex gap-6 flex-col items-center justify-center " id="prizepool">
                <h1 className="text-3xl text-white font-semibold oscillatey pt-7 ">Prizepool</h1>
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
        </ImagesSlider>
    );
};