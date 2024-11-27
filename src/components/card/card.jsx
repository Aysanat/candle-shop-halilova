import css from './card.module.css'
import { useState } from 'react';

function Card(props) {
    let data = props.data;

    let initCount = 0;
    let initDisabled = false;

    if (initCount < 0) {
        initCount = 0
        initDisabled = true;
    }

    let [count, setCount] = useState(initCount);
    let [disabled, setDisabled] = useState(initDisabled);

    function plusCount() {
        setCount(count + 1);
        setDisabled(false);
    }

    function minusCount() {
        if (count > 0) {
            setCount(count - 1);
        }

        if (count <= 1) {
            setDisabled(true)
        }
    }

    return (
        <div className={css.card}>
            <img
            src={data.img} 
            className={css.visual}
            alt={data.alt}
            />
            <div className={css.info}>
                <strong className={css.title}>{data.title}</strong>
                <p className={css.text}>{data.cost}</p>
                <div className={css.counter}>
                    <button onClick={minusCount} disabled={disabled}>-</button>
                    <span>{count}</span>
                    <button onClick={plusCount}>+</button>
                </div>
                <button href="#" className={css.btn}>В корзину</button>
            </div>
        </div>
    )
}

export default Card;