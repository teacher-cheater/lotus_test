import React from "react";
import Member from "../Member/Member";
import { data } from "../../data/data";
import s from "./Room.module.css";
import Parameters from "../Parameters/Parameters";
console.log(data.productionTime);

function Room() {
  return (
    <div>
      <h2>
        Ход торгов Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)
      </h2>
      <div className={s.content}>
        <h3 className={s.subtitle}>
          Уважаемые участники, во время Вашего хода Вы можете изменить параметры
          торгов, указанных в таблице:
        </h3>
        <div className={s.block}>
          <p className={s.text}>ХОД</p>
          <div className={s.timer}> 00:00:14</div>
        </div>
        <div className={s.table}>
          <Parameters></Parameters>
          {data.map((elem, index) => (
            <Member
              key={index}
              name={elem.activities}
              time={elem.productionTime}
              guarantee={elem.guarantee}
              termsOfPayment={elem.termsOfPayment}
              cost={elem.cost}
              cost2={elem.cost2}
              cost3={elem.cost3}
              actions={elem.actions}
            />
          ))}
          {/*<Member name={data.activities} time={data.productionTime}></Member>
          <Member time={data.productionTime}></Member>
          <Member time={data.productionTime}></Member>
          <Member time={data.productionTime}></Member>*/}
        </div>
      </div>
    </div>
  );
}

export default Room;
