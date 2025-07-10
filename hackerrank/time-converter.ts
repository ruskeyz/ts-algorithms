/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

export default function timeConversion(s: string): string {
  // Write your code here
  // Convert string to arr, define hours, minutes, seconds and midnighter

  const time = s.split(":");
  let hours: number = Number(time[0]);
  let minutes: number = Number(time[1]);
  let seconds: number = Number(time[2].slice(0, 2));
  const midnighter: string = time[2].slice(2);

  // IF PM -> add 12 to hours.
  if (midnighter === "PM" && hours !== 12) {
    hours += 12;
  } else if (midnighter === "AM" && hours > 11) {
    hours -= 12;
  }
  // IF AM -> subtract 12 from hours.
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
