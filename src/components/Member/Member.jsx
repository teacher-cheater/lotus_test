import React, { useState, useEffect } from "react";
import { GiSandsOfTime } from "react-icons/gi";

import s from "./Member.module.css";

const getPadTime = (time) => time.toString().padStart(2, "0");

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
  const [timeLeft, setTimeLeft] = useState(2 * 60);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);
  //const [isCounting, setIsCouting] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
  }, []);
  console.log(timeLeft);

  return (
    <div>
      <div className={s.items}>
        <div className={s.timer}>
          <span>{minutes}</span>
          <span> : </span>
          <span>{seconds}</span>

          <span>
            <GiSandsOfTime />
          </span>
        </div>
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
