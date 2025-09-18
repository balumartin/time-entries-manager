import React from "react";
import TimeEntryItem from "./TimeEntryItem.jsx";

export default function TimeEntryList({
  entries,
  deleteTimeEntry,
  editTimeEntry,
}) {
  return (
    <div className="flex flex-col mx-auto my-5 border border-slate-500 rounded-sm overflow-hidden">
      {entries?.length === 0 && (
        <h2 className="text-xl text-slate-300 font-semibold flex items-center justify-center">
          No entries available
        </h2>
      )}
      {entries?.length > 0 && (
        <table className="">
          <thead className="space-y-4">
            <tr className="bg-slate-500">
              <th colSpan={8} className="text-start font-medium text-slate-300 p-2">
                Entries
              </th>
            </tr>
            <tr className="">
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Name
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Description
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Workday
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Start Time
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                End Time
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Duration
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Tags
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400"></th>
            </tr>
          </thead>
          <tbody>
            {entries?.map((entry) => (
              <TimeEntryItem
                key={entry.id}
                {...entry}
                deleteTimeEntry={deleteTimeEntry}
                editTimeEntry={editTimeEntry}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
