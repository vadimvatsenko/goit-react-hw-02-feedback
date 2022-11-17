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

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    }

    handleIncrement = () => {
    this.setState(prevState => ({
        good: prevState.good + 1,
        // neutral: prevState.neutral + 1,
        // bad: prevState.good + 1,
    }));
    };
    // countTotalFeedback() {
    //     return this.state.good + this.state.neutral + this.state.bad
    // }

    render() {
        
        return (
            <section className={style.feedback}>
                <h1 className={style.feedback__header}>feedback form</h1>
                <h2 className={style.feedback__subheader}>Please leave feedback</h2>
                <div className={style.feedback__buttonWrap}>
                    <button className={style.feedback__button} type="button" onClick={this.handleIncrement}>good</button>
                    <button className={style.feedback__button} type="button">neutral</button>
                    <button className={style.feedback__button} type="button">bad</button>
                </div>
                <h2>Statics</h2>
                <ul>
                    <li>
                        <span>Good: </span>
                        <span>{this.state.good}</span>
                    </li>
                    <li>
                        <span>Neutral: </span>
                        <span>{this.state.neutral}</span>
                    </li>
                    <li>
                        <span>Bad: </span>
                        <span>{this.state.bad}</span>
                    </li>
                </ul>
                <div>
                    <span>Total: </span>
                    <span>{this.countTotalFeedback}</span>  
                </div>

            </section>
        )
    }
}

export default Feedback