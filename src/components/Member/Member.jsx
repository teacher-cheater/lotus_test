import React from "react";

import s from "./Member.module.css";
function Member({
  name,
  time,
  guarantee,
  termsOfPayment,
  cost,
  cost2,
  cost3,
  actions,
  id,
}) {
  return (
    <div>
      <div className={s.items}>
        <div className={s.item}>
          {name} №{id}
        </div>
        <p className={s.standart}>{actions}</p>
        <p className={s.lots}>{time}</p>
        <p className={s.month}>{guarantee}</p>
        <p className={s.pay}>{termsOfPayment}%</p>
        <div className={s.payment}>
          <p className={s.colorFirst}>{cost} руб.</p>
          <p className={s.colorSecond}> {cost2} руб.</p>
          <p className={s.colorThird}>{cost3} руб. </p>
        </div>
        <p className={s.actions}></p>
      </div>
    </div>
  );
}

export default Member;
