import Button from '../Button/Button'
import s from './Banner.module.css'
export default function Banner(){
    return(
        <section className={s.banner}>
            <h1 className={s.title}>
                Главный заголовок страницы
            </h1>
            <p className={s.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In totam maiores provident quibusdam ut, rerum nisi debitis natus saepe voluptates voluptate sequi labore vitae id!
            </p>
            <Button text = 'Подробнее о компании'/>
        </section>
    )
}