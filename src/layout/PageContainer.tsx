import React from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-[100vw] md:w-[85vw] h-[100vh] bg-gray-200">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
