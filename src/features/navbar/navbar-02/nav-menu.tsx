import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Testimonials",
    href: "/testimonial",
  },
  {
    label: "Timeline",
    href: "/timeline",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Footer",
    href: "/footer",
  },
];

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navItems.map((item) => (
        <NavigationMenuItem key={item.label}>
          <NavigationMenuLink asChild>
            <Link href={item.href}>{item.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
