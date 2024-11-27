import { NavLink } from 'react-router-dom';
import css from './nav.module.css'

function Nav() {
    return (
        <nav className={css.nav}>
            <ul className={css.list}>
                <li className={css.item}>
                    <NavLink to="/wax" className={css.link}>Воск</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/aromas" className={css.link}>Ароматы</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/diffusers" className={css.link}>Диффузоры</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/wicks" className={css.link}>Фитили</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/containers" className={css.link}>Тара</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/dyes" className={css.link}>Красители</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/delivery" className={css.link}>Доставка и оплата</NavLink>
                </li>
            </ul>

            <ul className={css.list2}>
                <li className={css.item2}>
                    <NavLink to="/sign" className={css.link2}>Войти в аккаунт</NavLink>
                </li>
                <li className={css.item2}>
                    <NavLink to="/login" className={css.link2}>Зврегистрироваться</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;