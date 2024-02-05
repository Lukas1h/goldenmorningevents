import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="shadow-large flex items-center justify-center pt-2 pb-2">
            <div className=" w-full grid grid-cols-3 max-w-[1000px] place-items-center text-xs md:text-medium">
                <Link href="/contact-us" className="text-gray-500 text-xs md:text-medium">Contact Us</Link>
                <p>Golden Morning</p>
                <Link href="/order" className="text-gray-500 text-xs md:text-medium">Order</Link>
            </div>
        </div>
    )
}