import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import "../App.css";

export const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return (
    <>
      <Nav></Nav>
      <div className="padding-top">
        <Outlet />
      </div>
    </>
  );
};
