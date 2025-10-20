import Button from '../Button/Button'
import s from './Header.module.css'
export default function Header(){
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <p className={s.logo}>LOGO</p>
                    <nav className={s.nav}>
                        <a href="#" className={s.nav__item}>Главная</a>
                        <a href="#" className={s.nav__item}>Каталог</a>
                        <a href="#" className={s.nav__item}>Корзина</a>
                    </nav>
                    <Button/>
                </div>
            </div>
        </header>
    )
}