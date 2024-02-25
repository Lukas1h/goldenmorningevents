import { Card as NextUICard } from "@nextui-org/react"


export default function HeaderCard({title}:{title:string}) {
    return (
        <div className="md:col-span-3 max-w-[340px] md:max-w-none ">
            <NextUICard className="w-[50%] mx-auto">
                <h2 className='text-center w-full font-semibold text-2xl p-4' id={`h-${title}`}>{title}</h2>
            </NextUICard>
        </div>
    )
}