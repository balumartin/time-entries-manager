import { differenceInMinutes, parse, addDays } from "date-fns";

export const calculateDifferenceTime = (start, end) => {
  const baseDate = new Date();

  let startTime = parse(start, "HH:mm", baseDate);
  let endTime = parse(end, "HH:mm", baseDate);

  if (endTime <= startTime) {
    endTime = addDays(endTime, 1);
  }

  const diff = differenceInMinutes(endTime, startTime);

  const hours = String(Math.floor(diff / 60)).padStart(2, "0");
  const minutes = String(diff % 60).padStart(2, "0");

  return `${hours}:${minutes}`;
};