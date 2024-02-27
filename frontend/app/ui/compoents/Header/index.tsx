import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextUILink, Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <Navbar>
            <NavbarBrand className="  hidden sm:block">
                <Link href={"/"}>
                <img
                    alt="Golden Morning Events Logo"
                    src="/logo-header.png"
                    width={1920/10}
                    height={500/10}
                    className="m-4"
                />
                </Link>
            </NavbarBrand>
            <div className="flex justify-between w-full sm:w-auto  sm:space-x-4">
                <NavbarItem className="h-[40px]">
                    <Button as={NextUILink} color="primary" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61556291533830" variant="flat"
                        className="aspect-square"
                    >
                        <img 
                        src="/fb.svg"
                        alt="Facebook Icon" 
                        className="p-3 w-[50px] h-[50px]"

                         />
                    </Button>
                </NavbarItem>
                <NavbarItem className="h-[40px]">
                    <Button as={NextUILink} color="primary" href="/contact-us" variant="flat" className="font-semibold">
                        Order Now
                    </Button>
                </NavbarItem>
                </div>
        </Navbar>
    )
}