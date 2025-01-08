import { cn } from "@/lib/utils"
import Marquee from "@/components/ui/marquee";
import { sponsorsList } from "./list";
import Image from "next/image";
import Link from "next/link";

const firstRow = sponsorsList.slice(0, sponsorsList.length / 2);
const secondRow = sponsorsList.slice(sponsorsList.length / 2);


const SponsorCard = ({
    name,
    logo
}: {
    name: string;
    logo: string;

}) => {
    return (
        <figure
            className={cn(
                "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-col items-center gap-2 border border-white rounded-xl py-6 shadow-inner shadow-white">
                <Image src={logo} alt={`${name} logo`} width={64} height={64} className="scale-150" />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};


export default function Sponsors() {
    return (
        <div className="sponsors text-white p-10 h-[120vh] bg-black w-full flex flex-col items-center justify-center gap-4" id="sponsors">
            <h1 className="text-4xl font-semibold text-center">
                Our Sponsors
            </h1>
            <p className="text-xl font-semibold text-center">
                UNPLUGGED 2.0 is made possible thanks to our amazing sponsors.
            </p>
            <div className="relative flex min-h-fit py-14 w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl bg-black">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <SponsorCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <SponsorCard key={review.name} {...review} />
                    ))}
                </Marquee>

            </div>
            <Link href={'/sponsor'} className="bg-blue-600 text-white font-semibold py-3 px-5 rounded-md">
                Become a sponsor
            </Link>
        </div>
    )
}
