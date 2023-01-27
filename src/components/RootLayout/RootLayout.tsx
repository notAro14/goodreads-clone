import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;
  return <div>{children}</div>;
}
