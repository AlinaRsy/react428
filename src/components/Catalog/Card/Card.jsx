import Button from '../../Button/Button'
import s from './Card.module.css'
import cardImg from '/cardImg.jpg'
export default function Card(){
    return(
        <div className={s.card}>
            <div className={s.img}>
                <img src={cardImg} alt="#" />
            </div>
            <h4 className={s.title}>Название товара</h4>
            <p className={s.price}>616$</p>
            <Button/>
        </div>
    )
}