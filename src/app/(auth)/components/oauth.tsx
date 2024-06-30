import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const OAuth = () => {
  return (
    <div className="flex justify-between gap-3">
      <Button variant='outline' className="w-full bg-background space-x-2">
        <Icons.github />
        <span>Github</span>
      </Button>

      <Button variant='outline' className="w-full bg-background space-x-2">
        <Icons.google />
        <span>Google</span>
      </Button>
    </div>
  );
};
