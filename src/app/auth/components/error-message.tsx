import { Label } from "@/components/ui/label";
import { FC } from "react";

interface ErrorLabelProps {
  message: string;
}

export const ErrorMessage: FC<ErrorLabelProps> = ({ message }) => {
  return <Label className="text-rose-600">{message}</Label>;
};
