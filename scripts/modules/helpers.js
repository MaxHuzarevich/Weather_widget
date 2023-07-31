const addZero = (n) => n < 10 ? `0${n}` : n

export const getCurrentDateTime = () => {
    const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];
    const weekDays = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
    ];
    const date = new Date();
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekDays[date.getDay()];

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return {dayOfMonth, month, year, dayOfWeek, hours, minutes}
}

export const getWindDirection = (deg) => {
    const direction = [
        '&#8593;',
        '&#8598;',
        '&#8592;',
        '&#8601;',
        '&#8595;',
        '&#8600;',
        '&#8594;',
        '&#8599;',
    ];

    const i = Math.round(deg / 45) % 8;

    return direction[i]
}

export const calculateDewPoint = (temp, humidity) => {
    const a = 17.27;
    const b = 237.7;

    const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
    const dewPoint = (b * ft) / (a - ft);
    return dewPoint.toFixed(1);
}
