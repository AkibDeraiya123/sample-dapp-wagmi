"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const ReactToastComp = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      {children}
      <Toaster />
    </React.Fragment>
  );
};

export default ReactToastComp;
