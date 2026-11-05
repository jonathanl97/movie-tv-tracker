"use client";

import Link from "next/link";
import clsx from "clsx";
import {
  HomeIcon,
  BookmarkIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  BookmarkIcon as BookMarkIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

//add types?
const links = [
  { name: "Home", href: "/home", icon: HomeIcon, activeIcon: HomeIconSolid },
  {
    name: "Watchlist",
    href: "/watchlist",
    icon: BookmarkIcon,
    activeIcon: BookMarkIconSolid,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircleIcon,
    activeIcon: UserCircleIconSolid,
  },
  {
    name: "Search",
    href: "/search",
    icon: MagnifyingGlassIcon,
    activeIcon: MagnifyingGlassIconSolid,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        let LinkIcon; //type??
        if (pathname == link.href) {
          LinkIcon = link.activeIcon;
        } else {
          LinkIcon = link.icon;
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-12 cursor-pointer flex-col text-sm hover:text-lime-400",
              {
                "text-lime-400": pathname == link.href,
              },
            )}
          >
            <LinkIcon />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
