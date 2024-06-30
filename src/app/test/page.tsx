'use client';

import React from 'react';
import {AuthProvider} from "@/app/providers/AuthProvider";

const Page = () => {
  return (
    <AuthProvider>
      test
    </AuthProvider>
  );
};

export default Page;