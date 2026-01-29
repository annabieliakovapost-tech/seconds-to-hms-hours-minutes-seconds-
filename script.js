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
  const input = prompt("Давай переведем секунды в часы и минуты?");
  const seconds = Number(input);

  if (input === null || input.trim() === "" || isNaN(seconds)) {
    alert("Пожалуйста, введи число");
    return;
  }

  if (seconds < 0) {
    alert("Число не может быть отрицательным");
    return;
  }

  if (seconds > 99999) {
    alert("Слишком большое число, введи меньше");
    return;
  }

  alert(getTimeBySeconds(seconds));
}

document.getElementById("btn").addEventListener("click", start);
