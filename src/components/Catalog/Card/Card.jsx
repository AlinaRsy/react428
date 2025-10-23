import { Link } from "react-router";
import Button from "../../Button/Button";
import s from "./Card.module.css";
export default function Card({ id, name, price, img }) {
  return (
    <div className={s.card}>
      <div className={s.img}>
        <img src={img} alt="#" />
      </div>
      <h4 className={s.title}>{name}</h4>
      <p className={s.price}>{price}$</p>
      {/* <Link to={String(id)}> */}
      <Link to={`${id}`}>
        <Button text="Подробнее" />
      </Link>
    </div>
  );
}
