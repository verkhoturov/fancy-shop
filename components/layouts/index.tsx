import { ReactNode } from "react";
import styles from "./index.module.scss";

interface Props {
  children?: ReactNode;
}

export const Main = ({ children }: Props) => <main>{children}</main>;

export const Section = ({ children }: Props) => (
  <section className={styles.section}>{children}</section>
);
