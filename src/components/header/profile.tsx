import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { useSessionStore } from "@/app/store";
import { useToken } from "@/app/hooks/useToken";

export const Profile = () => {
  const { logout, user } = useSessionStore();
  const { removeToken } = useToken();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-8 rounded-full">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user!.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user!.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex gap-3 cursor-pointer"
          onClick={() => {
            removeToken();
            logout();
          }}
        >
          <Icons.logout size={20} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
