import css from './form.module.css'

function Form() {
    return (
        <div className={css.login}>
            <div className={css.block}>
                <h1 className={css.title}>Создать аккаунт</h1>
                <p className={css.text}></p>

                <form action="#" className={css.form}>
                    <div className={css.filed}>
                        <input type="text" id="name" className={css.input} placeholder='Имя'/>
                    </div>
                    <div className={css.filed}>
                        <input type="number" id="phone" className={css.input} placeholder='+7 (999) 999-99-99' />
                    </div>
                    <div className={css.filed}> 
                        <input type="email" id="email" className={css.input} placeholder='example@mail.ru'/>
                    </div>
                    <div className={css.filed}>
                        <button className={css.btn}>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;