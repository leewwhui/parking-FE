'use client';

import React from "react";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { useSession } from "@/app/hooks/useSession";
import { AuthStatus } from "@/types";

export const Header = () => {
  const { status } = useSession();

  return (
    <header className="bg-white border-b">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5 flex items-center">
            <Icons.logo />
          </Link>

          <div className="hidden lg:flex lg:gap-x-4 ml-10">
            <Button>Features</Button>
            <Button>Marketplace</Button>
            <Button>Company</Button>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {status === AuthStatus.UNAUTHORIZED ? (
            <Link href="/login">
              <Button variant="default">Log in</Button>
            </Link>
          ) : null}
        </div>
        <MobileNav></MobileNav>
      </nav>
    </header>
  );
};
