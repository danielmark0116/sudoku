export const timeToLongString = (minutes, seconds) => {
  let minutesString = 'minute';
  let secondsString = ' second';
  let andValue = '';

  if (minutes > 1) minutesString += 's';
  if (seconds > 1) secondsString += 's';
  if (seconds > 0 && minutes > 0) andValue = ' and ';

  return `${minutes > 0 ? minutes : ''} ${
    minutes > 0 ? minutesString : ''
  }${andValue}${seconds > 0 ? seconds : ''}${seconds > 0 ? secondsString : ''}`;
};
