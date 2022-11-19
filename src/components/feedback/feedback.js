import React, { Component } from "react";
import Buttons from "../buttons/buttons";
import Statistics from "components/statistics/statistics";
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
                <Buttons
                    goodIncrement={this.goodIncrement}
                    neutralIncrement={this.neutralIncrement}
                    badIncrement={this.badIncrement} />

                <h2>Statics</h2>
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    percentage={this.countPositiveFeedbackPercentage()}
                />
               

            </section>
        );
    }
}

export default Feedback