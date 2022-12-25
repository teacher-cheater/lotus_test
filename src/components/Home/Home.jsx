import React from "react";

import logo from "./logo_lotus.svg";
import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1 className={s.title}>ЛОТОС</h1>
        <a target="_blank" href={"http://www.lotus1.org/"}>
          <img className={s.logo} src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
}

export default Home;
