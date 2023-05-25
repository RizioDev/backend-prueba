import React from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export default function Nav() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3f1b47",
    color: "#fff",
    padding: "10px 20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
  };
  return (
    <nav style={navStyle}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1>Countries App</h1>
      </Link>
      <SearchBar />
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li>
          <Link to="/activity" style={linkStyle}>
            Create Activity
          </Link>
        </li>
      </ul>
    </nav>
  );
}
