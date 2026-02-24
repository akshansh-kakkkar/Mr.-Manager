import React, { useContext, useState } from "react";
import { taskContext } from "../Context/CreateContext";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const { state } = useContext(taskContext);

  return (
    <>
      {state.tasks.length === 0 ? (
        <p className="text-xl sm:text-2xl roboto text-gray-800 font-bold">
          &lt;No Tasks found /&gt;
        </p>
      ) : (
        <div className="w-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border overflow-hidden">
          <div className="overflow-y-auto h-[150px]">
            <table className="w-full text-center table-auto text-xs sm:text-sm">
              <thead className="sticky top-0 z-10">
                <tr>
                  <th className="p-2 md:p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-xs md:text-sm font-normal leading-none text-slate-500">
                      Title
                    </p>
                  </th>
                  <th className="hidden md:table-cell p-2 md:p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-xs md:text-sm font-normal leading-none text-slate-500">
                      Description
                    </p>
                  </th>
                  <th className="hidden md:table-cell p-2 md:p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-xs md:text-sm font-normal leading-none text-slate-500">
                      Priority
                    </p>
                  </th>
                  <th className="p-2 md:p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-xs md:text-sm font-normal leading-none text-slate-500">
                      Actions
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full h-full">
                {state.tasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskList;
