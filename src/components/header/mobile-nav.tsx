"use client";

import { IconMenu2 } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { useMediaQuery } from "usehooks-ts";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useState } from "react";

export const MobileNav = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    isDesktop && setOpen(false);
  }, [isDesktop]);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>
            <IconMenu2></IconMenu2>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Button className="w-full flex justify-start">Features</Button>
              <Button className="w-full flex justify-start">Marketplace</Button>
              <Button className="w-full flex justify-start">Company</Button>
            </div>

            <div className="py-6">
              <Link href="/signin">
                <Button className="w-full flex justify-start">Sign in</Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
