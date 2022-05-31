export const addSecondsToDate = (seconds, date = new Date()) => {
    return new Date(date.getTime() + 1000*seconds);
};

export const addDaysToDate = (days, date = new Date()) => {
    return new Date(date.setDate(date.getDate() + days));
};