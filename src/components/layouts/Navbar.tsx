import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";

const links = [
    {
        "name": "Servers",
        "href": "/servers"
    },
    {
        "name": "Members",
        "href": "/members"
    },
    {
        "name": "Settings",
        "href": "/settings"
    }
]

export default function Navbar() {
    return <div className="flex flex-row items-center justify-between w-full border-b-[1px] border-slate-300">
        <div>
            <h1 className="text-4xl font-bold">Razuberri</h1>
        </div>
        <NavigationMenu>
            <NavigationMenuList className="space-x-4 my-2">
                {links.map((link, i) =>
                    <NavigationMenuItem key={i}>
                        <Link href={link.href}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {link.name}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
}