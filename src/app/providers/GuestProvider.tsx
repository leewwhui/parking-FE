'use client';

import React, {FC, Fragment, ReactNode, useContext} from 'react'
import {SessionContext} from "@/app/providers/SessionProvider";
import {redirect} from "next/navigation";

interface GuestProviderProps {
  children: ReactNode
}

export const GuestProvider: FC<GuestProviderProps> = (props) => {
  const user = useContext(SessionContext);

  if (user) return redirect('/');

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}
