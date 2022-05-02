const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date = undefined) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error("Invalid date!");
    }

    const month = date.getMonth();
    return month < 2
      ? "winter"
      : month < 5
      ? "spring"
      : month < 8
      ? "summer"
      : month < 11
      ? "autumn"
      : "winter";
  }
  throw new Error("Invalid date!");
}

module.exports = {
  getSeason,
};
