import { DateTime } from 'luxon';

export const convertTimestampToDate = (timestamp) => {
  const date = DateTime.fromMillis(+timestamp);
  return date.toFormat('yyyy-MM-dd HH:mm:ss');
};
