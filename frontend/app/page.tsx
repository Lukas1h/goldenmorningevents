import Image from 'next/image'
import {Card, CardHeader, CardBody, CardFooter} from '@nextui-org/react';

export default function Home() {
  return (
    <div>
      <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        <Card className="md:col-span-3 max-w-[340px] md:max-w-none">
          <Image
            src={"/hero.png"}
            width={1920}
            height={1080}
            alt='Golden Morning Events logo.'
          />
        </Card>
        <Card className="max-w-[340px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey 
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="max-w-[340px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey 
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="max-w-[340px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey 
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="max-w-[340px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey 
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className=" text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
