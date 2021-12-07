import dayjs from 'dayjs';

const today = dayjs();

export const yesterday = today.subtract(1, "day");

// dayjs methods

// .month() gets month
// .year() gets year
// .daysInMonth() gets days in month