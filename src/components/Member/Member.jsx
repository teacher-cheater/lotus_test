import React from "react";
//import { data } from "../../data/data";

import s from "./Member.module.css";
//console.log(data.map((elem) => elem.informationAboutParticipants));
function Member({
  name,
  time,
  guarantee,
  termsOfPayment,
  cost,
  cost2,
  cost3,
  actions,
}) {
  //console.log(time);
  return (
    <div>
      <div className={s.items}>
        <div className={s.item}>{name}</div>
        <p className={s.standart}>{actions}</p>
        <p className={s.lots}>{time}</p>
        <p className={s.month}>{guarantee}</p>
        <p className={s.pay}>{guarantee}%</p>
        <p className={s.payment}>
          <div className={s.colorFirst}>{cost} руб.</div>
          <div className={s.colorSecond}> {cost2} руб.</div>
          <div className={s.colorThird}>{cost3} руб. </div>
        </p>
        <p className={s.actions}></p>
      </div>
    </div>
  );
}

export default Member;
