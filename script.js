function getTimeBySeconds(sec) {
  let sek = sec % 60;
  let totalMin = Math.floor(sec / 60);
  let min = totalMin % 60;
  let hours = Math.floor(totalMin / 60);

  if (sek < 10) sek = "0" + sek;
  if (min < 10) min = "0" + min;
  if (hours < 10) hours = "0" + hours;

  return hours + ":" + min + ":" + sek;
}

function start() {
  const seconds = +prompt("Давай переведем секунды в часы и минуты?");
  alert(getTimeBySeconds(seconds));
}

document.getElementById("btn").addEventListener("click", start);
