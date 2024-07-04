import { FC } from "react";
import { Icons } from "./icons";
import { IconProps } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface LoadingProps extends IconProps {
  loading: boolean;
}

export const Loading: FC<LoadingProps> = (props) => {
  const { loading, ...rest } = props;

  return (
    <Icons.loading
      className={cn(
        `mr-2 h-4 w-4 animate-spin ${loading ? "block" : "hidden"}`,
        rest.className
      )}
      {...rest}
    />
  );
};
