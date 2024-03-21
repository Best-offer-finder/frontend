"use client";

import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const theme = createTheme({
  /** Put your mantine theme override here */
});

type Props = {
  children: ReactNode;
};

export default function CustomMantineProvider({ children }: Props) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}
