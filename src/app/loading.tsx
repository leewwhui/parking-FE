import { Icons } from "@/components/icons";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Icons.loading className="h-10 w-10 animate-spin" />
    </div>
  );
};

export default Loading;
