'use client';

import React, {FC, Fragment, ReactNode} from 'react'
import {redirect} from "next/navigation";
import {useSessionContext} from "@/app/hooks/useSession";

interface GuestProviderProps {
  children: ReactNode;
  isRedirect?: boolean;
}

export const GuestProvider: FC<GuestProviderProps> = (props) => {
  const {children, isRedirect = true} = props;
  const {user} = useSessionContext();

  if (user && isRedirect) return redirect('/');
  if (user && !isRedirect) return null;

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
