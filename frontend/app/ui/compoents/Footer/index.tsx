import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="shadow-large flex items-center justify-center p-4">
            <div className=" w-full flex items-center justify-between max-w-[1000px]">
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/order">Contact Us</Link>
            </div>
        </div>
    )
}