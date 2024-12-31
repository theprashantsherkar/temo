export default function Badge({ label, image }: badgeType) {
    return (
        <div className="flex items-center justify-center flex-col hover:cursor-pointer hover:-translate-y-2 transition-all">
            <div><img src={image} alt="this is a temp image" /></div>
            <div>
                {label}
            </div>
        </div>
    )
}

type badgeType = {
    label: string,
    image?: string ,
}