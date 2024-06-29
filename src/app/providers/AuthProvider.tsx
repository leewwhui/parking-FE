'use client';

import React, {FC, Fragment, ReactNode, useContext} from 'react'
import {SessionContext} from "@/app/providers/SessionProvider";
import {redirect} from "next/navigation";

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const user = useContext(SessionContext);

  if (!user) return redirect('/login');

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}
