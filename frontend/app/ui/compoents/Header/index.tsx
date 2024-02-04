import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function Header() {
    return (
        <Navbar>
            <NavbarBrand>
                <img
                    alt="Golden Morning Events Logo"
                    src="/logo-header.png"
                    width={1920/10}
                    height={500/10}
                    className="m-4"
                />
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/order" variant="flat">
                        Order Now
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}