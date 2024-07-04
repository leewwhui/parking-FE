"use client";

import { Icons } from "@/components/icons";
import { GuestProvider } from "@/providers/GuestProvider";
import Link from "next/link";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <GuestProvider>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <main className="flex items-center justify-center relative">
          <Link href="/" className="flex items-center absolute left-4 top-4">
            <Icons.logo size={26} />
          </Link>

          {children}
        </main>
        <div className="lg:block hidden h-full bg-[url('/images/auth-layout.jpg')] bg-cover"></div>
      </div>
    </GuestProvider>
  );
}
