// @ts-nocheck

import { Label } from "@/components/ui/label";
import { LoginErrorResponse, RegisterErrorResponse } from "@/types/api";
import { FC } from "react";

interface ErrorLabelProps {
  error: LoginErrorResponse | RegisterErrorResponse | null;
  name: string;
}

export const ErrorLabel: FC<ErrorLabelProps> = ({ error, name }) => {
  if (error === null || error.errors === null) return null;

  const messages = error.errors;

  if (!messages || !messages[name]) return null;

  return (
    <>
      {messages[name].map((message) => (
        <Label className="text-rose-600" key={message}>{message}</Label>
      ))}
    </>
  );
};
