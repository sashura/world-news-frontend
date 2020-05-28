import { monthes } from '../constants/monthes';

export const dateToFormat = (date) => {
  const dataNew = new Date(date);
  const timeMill = Date.parse(date);
  const yearPublication = dataNew.getFullYear(timeMill);
  const monthPublication = dataNew.getMonth(timeMill);
  const datePublication = dataNew.getDate(timeMill);
  const dateFormat = `${datePublication} ${monthes[monthPublication]} ${yearPublication}`;
  return dateFormat;
};
