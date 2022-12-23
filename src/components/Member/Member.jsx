import React, { useState, useEffect } from "react";
import { GiSandsOfTime } from "react-icons/gi";

import { data } from "../../data/data.js";

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

  //useEffect(() => {
  //  let interval = setInterval(() => {
  //    setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
  //  }, 1000);
  //  return () => clearInterval(interval);
  //}, [minutes, seconds]);

  const [playerId, setPlayerId] = useState(0);

  //const startTradeTime = new Date().setUTCHours(0, 0, 0, 0);
  const startTimer = new Date().setUTCHours(0, 0, 0, 0);

  useEffect(() => {
    function timer() {
      const currentTime = Date.now();
      const diffTimes = Math.floor((currentTime - startTimer) / 1000);
      const currentPlayer = Math.floor(diffTimes / 120) % data.length;
      const currentTimerTime = diffTimes % 120;
      setTimeLeft(currentTimerTime);

      setPlayerId(currentPlayer);
      //console.log(currentPlayer);
    }
    const interval = setInterval(timer, 1000);
    return () => clearInterval(interval);
  }, [startTimer, data]);

  //const [startDate, setStartDate] = useState(null);
  //const [endDate, setEndDate] = useState(null);
  //const timeSpent = (endDate ?? Date.now()) - startDate;
  //console.log(Math.floor(timeSpent / 60000).toLocaleString());
  //console.log(startDate);
  //console.log(endDate);
  //console.log(timeSpent);

  return (
    <div>
      <div className={s.items}>
        <div className={s.empty}>
          {playerId === id && (
            <div className={s.timer}>
              <span className={s.time}>
                {minutes}:{seconds}
              </span>
              <span className={s.icon}>
                <GiSandsOfTime />
              </span>
            </div>
          )}
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
