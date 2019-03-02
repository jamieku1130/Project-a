export const format = time => {
  let seconds = time % 60;
  let minutes = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / 60 / 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
  hours = hours.toString().length === 1 ? "0" + hours : hours;
  return hours + " : " + minutes + " : " + seconds;
};
