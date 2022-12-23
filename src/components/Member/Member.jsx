import React from "react";

import s from "./Member.module.css";

function Member() {
  return (
    <div>
      <div className={s.items}>
        <div className={s.item}>Участник №1</div>
        <p className={s.standart}>-</p>
        <p className={s.lots}>80</p>
        <p className={s.month}>24</p>
        <p className={s.pay}>30%</p>
        <p className={s.payment}>
          <p>3,700,000 руб.</p>
          <p> -25,000 руб.</p>
          <p>2,475,000 руб. </p>
        </p>
        <p className={s.actions}></p>
      </div>
    </div>
  );
}

export default Member;
