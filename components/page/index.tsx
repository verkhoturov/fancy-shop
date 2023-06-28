import { ReactNode } from "react";
import { Main } from "../layouts";
import { Header } from "../header";
import { Footer } from "../footer";

interface Props {
  children?: ReactNode;
}

export const Page = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
