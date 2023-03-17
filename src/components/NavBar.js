import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const sources = links.map(link => (
    <a key={link} href={"#" + link}>{link}</a>
  ))
  return <nav>{sources}</nav>;
}

export default NavBar;
