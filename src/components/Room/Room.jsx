import React from "react";

import s from "./Room.module.css";

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
          <div className={s.items}>
            <div className={s.item}>Параметры и требования</div>
            <p className={s.standart}>
              Наличие комплекса мероприятий, повышающих стандарты качества
              изготовления
            </p>
            <p className={s.lots}>Срок изготовления лота, дней</p>
            <p className={s.month}>Гарантийные обязательства, мес</p>
            <p className={s.pay}>Условия оплаты</p>
            <p className={s.payment}>
              Стоимость изготовления лота, руб. (без НДС)
            </p>
            <p className={s.actions}>Действия</p>
          </div>

          <div className={s.items}>
            <div className={s.item}>Параметры и требования</div>
            <p className={s.standart}>
              Наличие комплекса мероприятий, повышающих стандарты качества
              изготовления
            </p>
            <p className={s.lots}>Срок изготовления лота, дней</p>
            <p className={s.month}>Гарантийные обязательства, мес</p>
            <p className={s.pay}>Условия оплаты</p>
            <p className={s.payment}>
              Стоимость изготовления лота, руб. (без НДС)
            </p>
            <p className={s.actions}>Действия</p>
          </div>

          <div className={s.items}>
            <div className={s.item}>Параметры и требования</div>
            <p className={s.standart}>
              Наличие комплекса мероприятий, повышающих стандарты качества
              изготовления
            </p>
            <p className={s.lots}>Срок изготовления лота, дней</p>
            <p className={s.month}>Гарантийные обязательства, мес</p>
            <p className={s.pay}>Условия оплаты</p>
            <p className={s.payment}>
              Стоимость изготовления лота, руб. (без НДС)
            </p>
            <p className={s.actions}>Действия</p>
          </div>

          <div className={s.items}>
            <div className={s.item}>Параметры и требования</div>
            <p className={s.standart}>
              Наличие комплекса мероприятий, повышающих стандарты качества
              изготовления
            </p>
            <p className={s.lots}>Срок изготовления лота, дней</p>
            <p className={s.month}>Гарантийные обязательства, мес</p>
            <p className={s.pay}>Условия оплаты</p>
            <p className={s.payment}>
              Стоимость изготовления лота, руб. (без НДС)
            </p>
            <p className={s.actions}>Действия</p>
          </div>

          <div className={s.items}>
            <div className={s.item}>Параметры и требования</div>
            <p className={s.standart}>
              Наличие комплекса мероприятий, повышающих стандарты качества
              изготовления
            </p>
            <p className={s.lots}>Срок изготовления лота, дней</p>
            <p className={s.month}>Гарантийные обязательства, мес</p>
            <p className={s.pay}>Условия оплаты</p>
            <p className={s.payment}>
              Стоимость изготовления лота, руб. (без НДС)
            </p>
            <p className={s.actions}>Действия</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
