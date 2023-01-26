import { ReactNode } from "react";
import { Root } from "./RootLayout.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;
  return <Root>{children}</Root>;
}
