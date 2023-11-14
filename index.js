let isPositive = (number) => (number >= 0 ? true : false);

const giveMeResult = (dayOfWeek) => {

  if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    dayOfWeek = "dayOff";
  } else {
    dayOfWeek = "weekday";
  }

  switch (dayOfWeek) {
    case "weekday":
      console.log("Будний день");
      break;

    case "dayOff":
      console.log("Выходной день");
      break;
    default:
      console.log("Некорректное значение дня недели");
  }
};


const isInRange = (num) => {

    if (num > 10 && num < 20 || num === 0 || num === 100) {
        return true
    } else {
        return false
    }
}

console.log(isInRange(11)) // true
console.log(isInRange(8)) // false
console.log(isInRange(0)) // true
console.log(isInRange(100)) // true
console.log(isInRange(101)) // false
console.log(isInRange(25)) // false 