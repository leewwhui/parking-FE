"use client";

import { FC, useMemo, useState } from "react";
import { Input, InputProps } from "./input";
import { Button } from "./button";
import { Icons } from "../icons";

interface PasswordInputProps extends InputProps {
  show?: boolean;
}

export const PasswordInput: FC<PasswordInputProps> = (props) => {
  const [show, setShow] = useState(props.show || false);

  const Icon = useMemo(() => {
    if (show) return Icons.eyeClose;
    return Icons.eyeOpen;
  }, [show]);

  return (
    <div className="relative">
      <Input
        {...props}
        className="pr-10"
        type={show ? "text" : "password"}
      ></Input>
      <Button
        className="absolute right-0 top-0 h-full px-3 py-1 hover:bg-transparent"
        onClick={() => setShow(!show)}
        type="button"
      >
        <Icon />
      </Button>
    </div>
  );
};
