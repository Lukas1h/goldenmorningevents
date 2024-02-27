
import { Card as NextUICard, CardHeader, CardBody, CardFooter, Link } from '@nextui-org/react';


export default function FacebookCard() {
    return (
        <div className="block md:col-span-1 max-w-[340px] md:max-w-none h-full p-12">
            
            <NextUICard className="max-w-[340px] hover:scale-[103%]  h-full py-10">
                 {/* <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61556291533830" className='h-full '> */}
                <CardBody className="p-0 text-small text-default-400 h-full flex items-center justify-center flex-col">
                    <img
                        src="/fb.svg"
                        alt="Facebook Icon"
                        className="p-3 w-[65px] h-[65px]"

                    />
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61556291533830" showAnchorIcon>
                        <p className='text-center text-large font-semibold'>Facebook</p>
                    </Link>
                </CardBody>
                {/* </a> */}

        </NextUICard>
        </div>
    )
}