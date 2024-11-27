import css from './wax.module.css'

function Wax() {
    return (
        <div className={css.card}>
            <img
            src="" 
            className={css.visual}
            alt="Изображение товара" 
            />
            <div className={css.info}>
                <strong className={css.title}>Соевый воск</strong>
                <p className={css.text}>от 620 руб.</p>
                <button href="#" className={css.btn}>В корзину</button>
            </div>
        </div>
    )
}

export default Wax;