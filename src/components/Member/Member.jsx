import React from "react";
import { data } from "../../data/data";

import s from "./Member.module.css";
console.log(data.map((elem) => elem.informationAboutParticipants));
function Member() {
  return (
    <div>
      <div className={s.items}>
        <div className={s.item}></div>
        <p className={s.standart}>-</p>
        <p className={s.lots}>80</p>
        <p className={s.month}>24</p>
        <p className={s.pay}>30%</p>
        <p className={s.payment}>
          <p className={s.colorFirst}>3,700,000 руб.</p>
          <p className={s.colorSecond}> -25,000 руб.</p>
          <p className={s.colorThird}>2,475,000 руб. </p>
        </p>
        <p className={s.actions}></p>
      </div>
    </div>
  );
}

export default Member;
