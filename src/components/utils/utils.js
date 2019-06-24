const utils = {
    checkDays,
    getTargetDay
};

function getTargetDay(props) {
    const {dayIndex, daysState, month} = props,
        targetDay = daysState.filter((day) => (day['month'] === month) && (day['id'] === dayIndex));
    return targetDay[0];
}

function checkDays(props) {
    let {dayIndex, daysInMonth, firstDayNumber, countWeek} = props;

    if (dayIndex > daysInMonth + firstDayNumber - 1) {
        return null;
    }
    if (countWeek === 0 && dayIndex === firstDayNumber) {
        return dayIndex - firstDayNumber + 1;
    }

    if (countWeek === 0 && dayIndex > firstDayNumber) {
        return dayIndex - firstDayNumber + 1;
    }
    if (countWeek !== 0) {
        dayIndex++;
        return dayIndex - firstDayNumber;
    }
}

export default utils;