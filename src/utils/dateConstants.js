import dayjs from 'dayjs';

const today = dayjs();

export const yesterday = today.subtract(1, "day");