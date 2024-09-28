

import React from "react";
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        // Update the state every second to reflect the current time
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        // Clear the interval when the component is unmounted to prevent memory leaks
        clearInterval(this.timerID);
    }

    tick() {
        // Update the date state every second
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date } = this.state;
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();

        // Get the current day of the week (0 = Sunday, 6 = Saturday)
        const currentDayOfWeek = date.getDay();

        return (
            <div id="back">
                <div id="inn">
                    <div id="inner">
                        <div id="text">
                            <div className="dd"><p>DATE</p></div>
                            <div className="dd"><p>MONTH</p></div>
                            <div className="dd"><p>YEAR</p></div>
                        </div>
                        <div id="time"><h3>{day} / {month} / {year}</h3></div>
                        <div id="text">
                            <div className="hh"><p>HOUR</p></div>
                            <div className="hh"><p>MINUTE</p></div>
                            <div className="hh"><p>SECOND</p></div>
                        </div>
                        <div id="hours"><h3>{hours} : {minutes} : {seconds}</h3></div>

                        {/* Weekdays Section */}
                        <div id="weeks">
                            <div className={`week ${currentDayOfWeek === 1 ? 'active' : ''}`}></div>
                            <div className={`week ${currentDayOfWeek === 2 ? 'active' : ''}`}></div>
                            <div className={`week ${currentDayOfWeek === 3 ? 'active' : ''}`}></div>
                            <div className={`week ${currentDayOfWeek === 4 ? 'active' : ''}`}></div>
                            <div className={`week ${currentDayOfWeek === 5 ? 'active' : ''}`}></div>
                            <div className={`week ${currentDayOfWeek === 6 ? 'active' : ''}`}></div>
                            <div className={`week ${currentDayOfWeek === 0 ? 'active' : ''}`}></div> {/* Sunday is 0 */}
                        </div>

                        <div id="weektext">
                            <div className="weeksnames"><h6>Mon</h6></div>
                            <div className="weeksnames"><h6>Tue</h6></div>
                            <div className="weeksnames"><h6>Wed</h6></div>
                            <div className="weeksnames"><h6>Thu</h6></div>
                            <div className="weeksnames"><h6>Fri</h6></div>
                            <div className="weeksnames"><h6>Sat</h6></div>
                            <div className="weeksnames"><h6>Sun</h6></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;











