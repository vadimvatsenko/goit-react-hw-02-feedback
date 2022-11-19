import style from './buttons.module.css';

export default function Buttons({ goodIncrement, neutralIncrement, badIncrement }) {
    return (
        <div className={style.feedback__buttonWrap}>
                    <button className={style.feedback__button} type="button" onClick={goodIncrement}>good</button>
                    <button className={style.feedback__button} type="button" onClick={neutralIncrement}>neutral</button>
                    <button className={style.feedback__button} type="button" onClick={badIncrement}>bad</button>
        </div>
    )
}
