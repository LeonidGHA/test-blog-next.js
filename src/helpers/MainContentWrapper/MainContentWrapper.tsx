import { ReactNode } from "react";

const MainContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className={"container mx-auto px-20"}>{children}</div>
    </main>
  );
};

export default MainContentWrapper;
