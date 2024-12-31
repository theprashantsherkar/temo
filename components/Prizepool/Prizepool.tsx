import Badge from "../custom/Badge";

export default function Prizepool() {
    return (
        <div className="prizepool h-screen text-white bg-black flex gap-6 flex-col items-center justify-center " id="prizepool">
            <h1 className="text-3xl font-semibold oscillatey my-7">Prizepool</h1>
            <div>
                <Badge label="1st Prize" />
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