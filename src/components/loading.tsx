import { FC } from "react";
import { Icons } from "./icons";

interface LoadingProps {
  loading: boolean;
}

export const Loading: FC<LoadingProps> = (props) => {
  const { loading } = props;

  return (
    <Icons.loading
      className={`mr-2 h-4 w-4 animate-spin ${loading ? "block" : "hidden"}`}
    />
  );
};
