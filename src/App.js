import React from 'react';
import Week from './components/Week';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        const now = new Date();
        this.state = {
            year: now.getFullYear(),
            month: now.getMonth(),
            thisMonth: true,
            today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
            daysState: [],
            dayNames: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"]
        }
    }

    saveDaysState = (day) => {
        let copyDays = [...this.state.daysState];

        if (!copyDays.some((obj) => obj['id'] === day['id'] && obj['month'] === day['month'])) {
            copyDays.push({...day});
            this.setState({daysState: copyDays})
        }
    };

    editComment = (day, value) => {
        let copyDays = [...this.state.daysState];
        let targetDay = copyDays.filter((obj) => obj['id'] === day['id'] && obj['month'] === day['month']);
        targetDay[0]['comment'] = value;
        if (value === '') {
            targetDay[0]['comment'] = null;
            copyDays = copyDays.filter(day => day['id'] !== targetDay[0]['id']);
        }
        copyDays.map((obj) => obj);
        this.setState({daysState: copyDays});
    };

    cancelComment = (day, comment) => {
        let copyDays = [...this.state.daysState];
        let targetDay = copyDays.filter((obj) => obj['id'] === day['id'] && obj['month'] === day['month']);
        const index = copyDays.indexOf(day);

        copyDays[index]['comment'] = comment;

        this.setState(({daysState: copyDays}));
    };

    getFirstDayMouth = () => {
        const {year, month} = this.state;
        return new Date(year, month, 1).getDate();

    };
    getFirstDayNumber = () => {
        const {year, month} = this.state;
        return new Date(year, month, 1).getDay();
    };

    getDaysInMonth = () => {
        const {year, month} = this.state;
        return new Date(year, month + 1, 0).getDate();
    };

    createWeek = () => {
        let firstDay = this.getFirstDayMouth(), //1
            firstDayNumber = this.getFirstDayNumber(), //6
            daysInMonth = this.getDaysInMonth(); //30

        const mappingEl = [];
        let countWeek = 0;
        let week = Math.ceil(daysInMonth / 7);

        if (firstDayNumber === 0) {
            firstDayNumber = 7;
        }

        if ((firstDayNumber > 6 && daysInMonth >= 30) || (firstDayNumber > 3 && this.state.month === 1)) {
            week++;
        }

        while (week !== countWeek) {
            mappingEl.push(<Week
                cancelComment={this.cancelComment}
                editComment={this.editComment}
                daysState={this.state.daysState}
                thisMonth={this.state.thisMonth}
                month={this.state.month}
                today={this.state.today}
                countWeek={countWeek}
                firstDay={firstDay}
                firstDayNumber={firstDayNumber}
                daysInMonth={daysInMonth}
                dayNames={this.state.dayNames}
                saveDaysState={this.saveDaysState}
            />);
            countWeek++;
        }
        return mappingEl.map((component) => component);
    };

    render() {
        return (
            <div className="calendar__app ">
                <div className={"calendar-caption"}>
                    <button
                        onClick={() => {
                            if (this.state.month === 0) {
                                return;
                            }
                            this.setState({month: this.state.month - 1})
                        }}
                    >{'<'}</button>

                    <div className={"calendar-head"}>
                        <span>{this.state.year}</span>
                        <span>{this.state.monthNames[this.state.month]}</span>
                    </div>

                    <button
                        onClick={() => {
                            if (this.state.month === 11) {
                                return;
                            }
                            this.setState({
                                month: this.state.month + 1,
                            })
                        }}
                    >{'>'}</button>
                </div>
                <table className={"calendar-board"}>
                    <tr>
                        {this.state.dayNames.map((dayName) => <th>{dayName.slice(0, 3)}</th>)}
                    </tr>

                    {this.createWeek()}
                </table>
            </div>
        );
    }
}

export default App;
