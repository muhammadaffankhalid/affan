import "./nav.css";
import React from "react";
import Link from "next/link";
const Nav: React.FC = () => {
  return (
    <div className="root">
      <div className="navbar">
        <div className="left-things">Affan</div>
        <nav>
          <div className="items">
            <ul className="subjects">
              <li>
                <Link href="/">#Home</Link>
              </li>
              <li>
                <Link href="/skills">#Skills</Link>
              </li>
              <li>
                <Link href="/about">#About Me</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
