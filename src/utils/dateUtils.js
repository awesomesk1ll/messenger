export const extractTimeString = (date) => {
    const [hour, min] = new Date(date).toTimeString().split(':');

    return `${hour}:${min}`;
};
