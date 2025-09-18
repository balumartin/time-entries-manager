import { differenceInMinutes, parse } from "date-fns";

export const calculateDifferenceTime = (start, end) => {
  const startTime = parse(start, "HH:mm", new Date());
  const endTime = parse(end, "HH:mm", new Date());

  const differenceInMins = differenceInMinutes(endTime, startTime);
  const hours = Math.floor(differenceInMins / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (differenceInMins % 60).toString().padStart(2, "0");

  const result = `${hours}:${minutes} `;

  return result;
};
