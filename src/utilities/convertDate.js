export default function convertDate(
  value,
  includeDay = true,
  includeYear = true,
  includeHours = false
) {
  const date = new Date(parseInt(value, 10));

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  let year = date.getFullYear();
  const month = months[date.getMonth()];

  let hour = date.getHours();
  let minute = date.getMinutes();
  let period = 'am';

  if (hour > 11) {
    hour -= 11;
    period = 'pm';
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  year = `, ${year}`;
  const time = ` at ${hour}:${minute} ${period}`;

  return `${month}${includeDay ? ` ${day}` : ''}${includeYear ? year : ''}${
    includeHours ? time : ''
  }`;
}
