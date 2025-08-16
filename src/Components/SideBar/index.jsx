import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobile = () => setMobileOpen((prevState) => !prevState);

  return (
    <>
      {/* Hamburger for mobile */}
      {isMobile && (
        <button
          className="btn btn-light position-fixed top-0 start-0 m-2 z-3"
          onClick={toggleMobile}
        >
          <i className="bi bi-list fs-3"></i>
        </button>
      )}
      {isMobile && mobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.3)", zIndex: 1000 }}
          onClick={toggleMobile}
        />
      )}

      <div
        className={`sidebar d-flex flex-column bg-primary text-white position-fixed h-100 
          ${
            isMobile
              ? mobileOpen
                ? "expanded"
                : "collapsed-mobile"
              : hovered
              ? "expanded"
              : ""
          }
        `}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        <div className="text-center py-3 fw-bold fs-4">
          {hovered || mobileOpen || isMobile ? "TechStyle" : "TS"}
        </div>

        <nav className="nav flex-column text-white px-2">
          <Link
            to="/dashboard"
            className="nav-link text-white d-flex align-items-center"
            activeclassname={"active"}
          >
            <i className="bi bi-grid-fill me-2"></i>
            {(hovered || mobileOpen) && "Dashboard"}
          </Link>
          <Link
            to="/orders"
            className="nav-link text-white d-flex align-items-center"
          >
            <i className="bi bi-bag-check-fill me-2"></i>
            {(hovered || mobileOpen) && "Orders"}
          </Link>
          <Link
            to="/settings"
            className="nav-link text-white d-flex align-items-center"
          >
            <i className="bi bi-gear-fill me-2"></i>
            {(hovered || mobileOpen) && "Settings"}
          </Link>
        </nav>

        <div className="mt-auto mb-3 px-2">
          <button className="btn btn-outline-light w-100">Logout</button>
        </div>
      </div>
    </>
  );
}
