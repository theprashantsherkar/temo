
export default function Badge({ label, image }: badgeType) {

 
    return (
        <div className="flex items-center justify-center flex-col hover:cursor-pointer hover:-translate-y-4 transition-all">
            <div><img className="h-48 w-48" src={image} alt={label} /></div>
            <div className="text-3xl font-semibold text-black">
                {label}
            </div>
        </div>
    )
}

type badgeType = {
    label: string,
    image?: string ,
}