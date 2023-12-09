import { FC, ReactNode } from "react";

export const Wrapper:FC <IProps> = ({ children }) => {
  return <main className="constructor pl-5 pr-5 container">{children}</main>;
};


type IProps = {
  children?: ReactNode;
}