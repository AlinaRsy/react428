import { Link, NavLink } from 'react-router'
import Button from '../Button/Button'
import s from './Header.module.css'
export default function Header(){
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <p className={s.logo}>LOGO</p>
                    <nav className={s.nav}>
                        <NavLink to="/" className={s.nav__item}>Главная</NavLink>
                        <NavLink to="/catalog" className={s.nav__item}>Каталог</NavLink>
                        <p className={s.nav__item}>Корзина</p>
                    </nav>
                    <Button text='Авторизация'/>
                </div>
            </div>
        </header>
    )
}