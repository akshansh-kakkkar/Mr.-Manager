import React, { useContext, useState } from "react";
import { taskContext } from "../Context/CreateContext";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const { state } = useContext(taskContext);

  return (
    <>
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
            {state.tasks.length === 0 ? (
              <tbody className="w-full h-full">

                <tr  className="hover:bg-slate-50 w-full h-[100px] items-center ">
   
                <td colSpan={4}  className=" col-span-3 text-4xl h-full font-bold roboto items-center w-full"><p>&lt;No Tasks found /&gt;</p></td>

                </tr>
              </tbody>
            ) : (
              <tbody className="w-full h-full">
                {state.tasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskList;
