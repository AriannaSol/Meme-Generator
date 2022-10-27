import React from "react";
import troll from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header-img" src={troll} alt="" />
      <h1 className="header-title">Meme Generator</h1>
    </header>
  );
}
