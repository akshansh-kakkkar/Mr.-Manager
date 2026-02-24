import React, { useContext } from "react";
import { taskContext } from "../Context/CreateContext";

const Stats = () => {
  const { state } = useContext(taskContext);
  const total_Tasks = state.tasks.length;
  const Completed_Tasks = state.tasks.filter((task) => task.completed === true).length;
  const Pending_Tasks = total_Tasks - Completed_Tasks;
  const percentage = total_Tasks === 0 ? 0 : Math.round((Completed_Tasks / total_Tasks) * 100)
  return (
    <>
      <div className="bg-blue-50 pb-13 px-12 rounded-xl">
        <div className="text-2xl font-medium  p-4">Stats</div>
        <div className="sm:grid sm:grid-cols-3 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-xl">
            <h1 className="text-2xl font-medium p-2 ">completed</h1>
            <p className="text-4xl font-medium ">{Completed_Tasks}</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h1 className="text-2xl font-medium p-2 ">Pending</h1>
            <p className="text-4xl font-medium ">{Pending_Tasks}</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h1 className="text-2xl font-medium p-2 ">Total </h1>
            <p className="text-4xl font-medium ">{total_Tasks}</p>
          </div>
        </div>
        <div className="pt-4">
          <span className="roboto tracking-widest font-bold text-xl flex text-gray-800">PERCENTAGE</span>
          <div className="w-full bg-white rounded-xl">
            <div className=' bg-blue-200 h-4 rounded-full transition-all duration-500' style={{ width: `${percentage}%` }}>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
