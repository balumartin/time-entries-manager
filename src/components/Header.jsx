import timeClockIcon from "../assets/time-clock.svg";

export default function Header() {
  return (
    <div className="w-full p-2 bg-slate-600 border-b border-slate-500">
      <div className="flex items-center">
        <img className="h-[2rem] mx-2" src={timeClockIcon} alt="time-clock" />
        <span className="text-2xl text-slate-300">Time Entries Manager</span>
      </div>
    </div>
  );
}
