//

// src/components/DashboardLayout.jsx
import React from "react";

import Sidebar from "../SideBar";
import Navbar from "../Navbar";

export default function Home({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: "60px" }}>
        <Navbar />
        {/* <div className="p-4">{children}</div> */}
      </div>
    </div>
  );
}
