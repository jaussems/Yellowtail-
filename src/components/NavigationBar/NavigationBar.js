import React from "react";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  return (
    <div>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/user/:id">My Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
