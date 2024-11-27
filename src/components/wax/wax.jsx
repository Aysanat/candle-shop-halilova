import Card from '../card/card'
import css from './wax.module.css'

let cardsData = [
    {
        img: "",
        alt: "Изображение товара",
        title: "Соевый воск контейнерный",
        cost: "от 620 руб."
    },

    {
        img: "",
        alt: "Изображение товара",
        title: "Соевый воск формовой",
        cost: "от 1150 руб."
    },

    {
        img: "",
        alt: "Изображение товара",
        title: "Формовой воск blend",
        cost: "от 1100 руб."
    },

    {
        img: "",
        alt: "Изображение товара",
        title: "Кокосовый воск контейнерный ",
        cost: "от 630 руб."
    }
]

let cardsArray = [];

cardsData.forEach((itemData) => {
    cardsArray.push(<Card data={itemData} key={itemData.key}/>)
})

function Wax() {
    return (
        <div className={css.wax}>
            <h2 className={css.title}>Воск</h2>
            <div className={css.list}>
                {cardsArray}
            </div>
        </div>
    )
}

export default Wax;