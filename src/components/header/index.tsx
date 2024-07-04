"use client";

import React from "react";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { Profile } from "./profile";
import { GuestProvider } from "@/providers/GuestProvider";
import { AuthProvider } from "@/providers/AuthProvider";

export const Header = () => {
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <GuestProvider isRedirect={false}>
            <Link href="/auth/login">
              <Button variant="default">Log in</Button>
            </Link>
          </GuestProvider>

          <AuthProvider isRedirect={false}>
            <Profile />
          </AuthProvider>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};
