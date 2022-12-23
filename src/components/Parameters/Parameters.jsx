import React from "react";
import s from "../Room/Room.module.css";

function Parameters() {
  return (
    <div className={s.items}>
      <div className={s.text}>
        <p>ХОД</p>
      </div>
      <div className={s.item}>Параметры и требования</div>
      <p className={s.standart}>
        Наличие комплекса мероприятий, повышающих стандарты качества
        изготовления
      </p>
      <p className={s.lots}>Срок изготовления лота, дней</p>
      <p className={s.month}>Гарантийные обязательства, мес</p>
      <p className={s.pay}>Условия оплаты</p>
      <p className={s.payment}>Стоимость изготовления лота, руб. (без НДС)</p>
      <p className={s.actions}>Действия</p>
    </div>
  );
}

export default Parameters;
