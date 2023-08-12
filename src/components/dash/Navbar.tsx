import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/NavigationMenu";
import { useRouter } from "next/router";

const links = [
    {
        "name": "Servers",
        "href": "/dashboard"
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
    const router = useRouter();

    return <div className="flex flex-row items-center justify-between w-full border-b-[1px] border-slate-300">
        <div>
            <h2 className="text-4xl font-bold">Razuberri</h2>
        </div>
        <NavigationMenu>
            <NavigationMenuList className="space-x-4 my-2">
                {links.map((link, i) =>
                    <NavigationMenuItem key={i}>
                        <Link href={link.href}>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-stone-400 ${router.route.includes(link.href) ? "bg-stone-400" : "bg-stone-300"}`}>
                                {link.name}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
}