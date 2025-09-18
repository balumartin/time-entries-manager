import { useEffect, useState } from "react";
import { calculateDifferenceTime } from "../../utils/calculateDifferenceTime";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { FaRegSquarePlus } from "react-icons/fa6";

const initialValues = {
  name: "",
  description: "",
  startTime: "09:00",
  endTime: "17:00",
  workDay: format(new Date(), "yyyy-MM-dd"),
  tags: [],
};

export default function TimeEntryForm({ onSubmit, newValues = null }) {
  const [formData, setFormData] = useState(newValues || initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    const { name, description, startTime, endTime, workDay, tags } = formData;
    if (!name || !description || !workDay) {
      toast.error("Please fill in all fields.", {
        style: {
          borderRadius: "10px",
          background: "#94a3b8",
          color: "#fff",
        },
      });
      return;
    }

    const timeDuration = calculateDifferenceTime(startTime, endTime);
    const updatedFormData = {
      ...formData,
      time: timeDuration,
    };

    onSubmit(updatedFormData);

    setFormData(initialValues);
  }

  useEffect(() => {
    if (newValues) {
      setFormData(newValues);
    } else {
      setFormData(initialValues);
    }
  }, [newValues]);

  return (
    <form onSubmit={handleSubmit} className="max-w-[1400px] rounded-sm-lg p-2">
      <h2 className="text-xl text-slate-200 text-start my-4">Add new entry</h2>
      <div className="flex justify-between flex-wrap items-end mx-auto ">
        <div className="">
          <label
            htmlFor="name"
            className="block  text-sm font-medium text-slate-100"
          >
            Name:
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              id="name"
              className=" autofill:bg-yellow-200 bg-slate-500 outline-none active:ring-slate-300 focus:ring-1 focus:ring-slate-300 border-slate-400 text-slate-50 text-sm rounded-sm after:bg-slate-400 block p-1 "
            />
          </label>
        </div>
        <div className="">
          <label
            htmlFor="description"
            className="block  text-sm font-medium text-slate-100"
          >
            Description:
            <input
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              id="description"
              className="bg-slate-500 outline-none active:ring-slate-300 focus:ring-1 focus:ring-slate-300 border-slate-400 text-slate-50 appearance-none text-sm rounded-sm after:bg-slate-400 block p-1 "
            />
          </label>
        </div>
        <div className="">
          <label
            htmlFor="startTime"
            className="block  text-sm font-medium text-slate-100"
          >
            Start:
            <input
              onChange={(e) =>
                setFormData({ ...formData, startTime: e.target.value })
              }
              type="time"
              name="startTime"
              value={formData.startTime}
              id="startTime"
              className="bg-slate-500 outline-none active:ring-slate-300 focus:ring-1 focus:ring-slate-300 border-slate-400 text-slate-50 appearance-none text-sm rounded-sm after:bg-slate-400 block p-1 "
            />
          </label>
        </div>
        <div className="">
          <label
            htmlFor="endTime"
            className="block  text-sm font-medium text-slate-100"
          >
            End:
            <input
              onChange={(e) =>
                setFormData({ ...formData, endTime: e.target.value })
              }
              type="time"
              name="endTime"
              id="endTime"
              value={formData.endTime}
              className="bg-slate-500 outline-none active:ring-slate-300 focus:ring-1 focus:ring-slate-300 border-slate-400 text-slate-50 appearance-none text-sm rounded-sm after:bg-slate-400 block p-1 "
            />
          </label>
        </div>
        <div className="">
          <label
            htmlFor="workDay"
            className="block  text-sm font-medium text-slate-100"
          >
            Day:
            <input
              onChange={(e) =>
                setFormData({ ...formData, workDay: e.target.value })
              }
              type="date"
              name="workDay"
              id="workDay"
              value={formData.workDay}
              className="bg-slate-500 outline-none active:ring-slate-300 focus:ring-1 focus:ring-slate-300 border-slate-400 text-slate-50 appearance-none text-sm rounded-sm after:bg-slate-400 block p-1 "
            />
          </label>
        </div>

        <div className="">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-slate-100"
          >
            Tags:
            <select
              id="tag-select"
              name="tags"
              value={formData.tags}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tags: e.target.value,
                })
              }
              className="bg-slate-500 outline-none active:ring-slate-300 focus:ring-1 focus:ring-slate-300 
                 border-slate-400 text-slate-50 text-sm rounded-sm block w-full p-1"
            >
              <option value="">--Please choose an option--</option>
              <option value="work">Work</option>
              <option value="meeting">Meeting</option>
              <option value="learning">Learning</option>
              <option value="break">Break</option>
              <option value="research">Research</option>
              <option value="urgent">Urgent</option>
            </select>
          </label>
        </div>
        {newValues ? (
          <button className="bg-yellow-500 text-white h-auto p-2 rounded-xl">
            Save
          </button>
        ) : (
          <button className="bg-blue-500 text-white p-2 rounded-xl">
            <FaRegSquarePlus />
          </button>
        )}
      </div>
    </form>
  );
}
