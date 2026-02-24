import { useContext } from "react";
import { taskContext } from "../Context/CreateContext";

const Task = ({ task }) => {
  const {
    dispatch,
    setDeleteModal,
    setDeleteTaskId,
    setEditModal,
    seteditingTask,
    viewMore,
    setViewMore,
  } = useContext(taskContext);

  const handleEdit = (task) => {
    seteditingTask(task);
    setEditModal(true);
  };
  return (
    <>
      <tr className="hover:bg-slate-50">
        <td className="p-2 md:p-4 border-b border-slate-200">
          <p
            className="block text-xs md:text-sm text-slate-800 line-clamp-1 truncate cursor-pointer max-w-[80px] md:max-w-[100px]"
            onClick={() => setViewMore(task)}
          >
            {task.title}
          </p>
        </td>
        <td className="hidden md:table-cell p-2 md:p-4 border-b border-slate-200">
          <p
            className="block text-xs md:text-sm text-slate-800 line-clamp-1 truncate cursor-pointer max-w-[100px]"
            onClick={() => setViewMore(task)}
          >
            {task.description}
          </p>
        </td>
        <td className="hidden md:table-cell p-2 md:p-4 border-b border-slate-200">
          <p
            className="block text-xs md:text-sm text-slate-800 cursor-pointer"
            onClick={() => setViewMore(task)}
          >
            {task.priority}
          </p>
        </td>
        <td className="p-2 md:p-4 border-b border-slate-200 flex gap-2 md:gap-6 items-center justify-center">
          <button
            className="cursor-pointer"
            onClick={() => dispatch({ type: "Toggle_Task", payload: task.id })}
          >
            <img
              className="transition-transform duration-200 hover:scale-110"
              width={36}
              src={
                task.completed === false
                  ? "/assets/notDone.svg"
                  : "/assets/done.svg"
              }
              alt=""
            />
          </button>
          <button className="cursor-pointer" onClick={() => handleEdit(task)}>
            <lord-icon
              src="https://cdn.lordicon.com/exymduqj.json"
              trigger="hover"
              state="hover-line"
              colors="primary:#9cc2f4,secondary:#1663c7"
              width="40"
            ></lord-icon>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => {
              setDeleteTaskId(task.id);
              setDeleteModal(true);
            }}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jzinekkv.json"
              trigger="morph"
              stroke="bold"
              state="morph-trash-in"
              colors="primary:#9cc2f4,secondary:#1663c7"
              width="40"
            ></lord-icon>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Task;
