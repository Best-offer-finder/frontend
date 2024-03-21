import { ReactNode } from "react";
import CustomMantineProvider from "./CustomMantineProvider";
import CustomSessionProvider from "./CustomSessionProvider";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <>
      <CustomSessionProvider>
        <CustomMantineProvider>{children}</CustomMantineProvider>
      </CustomSessionProvider>
    </>
  );
}
