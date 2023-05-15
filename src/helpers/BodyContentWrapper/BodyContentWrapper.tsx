import { ReactNode } from "react";

const BodyContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={`flex flex-col  min-h-screen `}>{children}</div>;
};

export default BodyContentWrapper;
