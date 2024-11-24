"use client";

import {
  ThemeProviderProps,
  ThemeProvider as NextTeamProvider,
} from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextTeamProvider {...props}>{children}</NextTeamProvider>;
};

export default ThemeProvider;
