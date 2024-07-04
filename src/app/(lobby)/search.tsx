import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";

export const LobbySearch = () => {
  return (
    <div className="shadow-md rounded-full overflow-hidden border flex relative gap-4 items-center pr-4">
      <div className="flex gap-1">
        <Button size="xl" className="rounded-none">
          Where
        </Button>
        <Button size="xl" className="rounded-none">
          Check in
        </Button>
        <Button size="xl" className="rounded-none">
          Check out
        </Button>
        <Button size="xl" className="rounded-none">
          Who
        </Button>
      </div>

      <Button
        className="rounded-full bg-rose-500 hover:bg-rose-500/80"
        variant="default"
        size="icon"
      >
        <Icons.search />
      </Button>
    </div>
  );
};
