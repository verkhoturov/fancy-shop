import { ReactNode } from "react";
import { Main } from "../layouts"

interface Props {
  children?: ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <>
      {/* <Header /> */}
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
};
