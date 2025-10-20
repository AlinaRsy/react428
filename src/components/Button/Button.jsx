import s from './Button.module.css'

export default function Button({text = 'Кнопка'}){
    return(
        <button className={s.btn}>{text}</button>
    )
}