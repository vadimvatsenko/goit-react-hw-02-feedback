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

    goodIncrement = () => {
    this.setState(prevState => ({
        good: prevState.good + 1,
    }));
    };
    neutralIncrement = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1,
    }));
    };
    badIncrement = () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1,
    }));
    };

    countTotalFeedback = () => 
         this.state.good + this.state.neutral + this.state.bad
        
    

    countPositiveFeedbackPercentage = () =>
        Number.parseInt(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)
       
    
    

    render() {
        
        return (
            <section className={style.feedback}>
                <h1 className={style.feedback__header}>feedback form</h1>
                <h2 className={style.feedback__subheader}>Please leave feedback</h2>
                <div className={style.feedback__buttonWrap}>
                    <button className={style.feedback__button} type="button" onClick={this.goodIncrement}>good</button>
                    <button className={style.feedback__button} type="button" onClick={this.neutralIncrement}>neutral</button>
                    <button className={style.feedback__button} type="button" onClick={this.badIncrement}>bad</button>
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
                    <span>{ this.countTotalFeedback()}</span>  
                </div>
                <div>
                    <span>Positive feedback: </span>
                    <span>{this.countPositiveFeedbackPercentage()}%</span>
                </div>

            </section>
        )
    }
}

export default Feedback