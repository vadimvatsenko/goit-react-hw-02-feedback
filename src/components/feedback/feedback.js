import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './feedback.module.css'

class Feedback extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    static propTypes = {
        //
    }

    render() {
        
        return (
            <section className={style.feedback}>
                <h1 className={style.feedback__header}>feedback form</h1>
                <h2 className={style.feedback__subheader}>Please leave feedback</h2>
                <div className={style.feedback__buttonWrap}>
                    <button className={style.feedback__button} type="button">good</button>
                    <button className={style.feedback__button} type="button">neutral</button>
                    <button className={style.feedback__button} type="button">bad</button>
                </div>
                <h2>Statics</h2>
                <ul>
                    <li>
                        <span>Good:</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Neutral</span>
                        <span></span>
                    </li>
                    <li>
                        <span>Bad</span>
                        <span></span>
                    </li>
                </ul>

            </section>
        )
    }
}

export default Feedback