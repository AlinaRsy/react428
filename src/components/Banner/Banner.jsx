import { useState } from 'react'
import Button from '../Button/Button'
import s from './Banner.module.css'
export default function Banner(){
    let [count, setCount] = useState(0);
    return(
        <section className={s.banner}>
            <h1 className={s.title}>
                Главный заголовок страницы
            </h1>
            <button onClick={()=>setCount(count+1)}>Click {count}</button>
            <p className={s.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In totam maiores provident quibusdam ut, rerum nisi debitis natus saepe voluptates voluptate sequi labore vitae id!
            </p>
            <Button text = 'Подробнее о компании'/>
        </section>
    )
}