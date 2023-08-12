import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          to=""
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : undefined;
          }}
          to="products"
        >
          Products
        </NavLink>
      </nav>
    </>
  );
}
