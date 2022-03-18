import React from "react";
import TopNav from "../components/TopNav";

function DefaultLayout({ children }) {
  return (
    <div>
      <TopNav />
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
