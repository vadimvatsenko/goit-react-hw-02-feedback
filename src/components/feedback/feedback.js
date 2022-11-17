import React, { Component } from "react";
import PropTypes from 'prop-types';
import 

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
            <section>
                <h1>feedback form</h1>
                <h2>Please leave feedback</h2>
                <div>
                    <button type="button">good</button>
                    <button type="button">neutral</button>
                    <button type="button">bad</button>
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