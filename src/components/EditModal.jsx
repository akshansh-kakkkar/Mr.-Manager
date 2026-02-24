import { useContext, useState } from "react";
import { taskContext } from "../Context/CreateContext";

const EditTask = () => {
  const { dispatch, editingTask, seteditingTask } = useContext(taskContext);

  if (!editingTask) return null;

  const [title, setTitle] = useState(editingTask.title);
  const [description, setDescription] = useState(editingTask.description);
  const [priority, setPriority] = useState(editingTask.priority);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: "Edit_Task",
      payload: {
        id: editingTask.id,
        updatedData: {
          title,
          description,
          priority,
        },
      },
    });
    seteditingTask(null);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10 ">
      <div className="bg-blue-50 rounded-xl flex-col w-[25] h-[20] p-3 items-center flex justify-center">
        <h2 className="text-2xl text-gray-800 roboto font-medium">Edit Task</h2>
        <div className="flex justify-between flex-col">
          <form onSubmit={handleUpdate}>
            <div className="flex items-left flex-col ">
            <div className="flex items-center">
              <label htmlFor="title" className="roboto text-gray-800">Title : </label>
              <input
                required
                placeholder="I am empty :)"
                className="outline-none text-xl bg-white m-3 p-2 rounded-xl roboto font-medium placeholder:text-gray-500 text-gray-700"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="description" className="roboto text-gray-800">Desc : </label>
              <input
                type="text"
                placeholder="add something...."
                className="outline-none text-xl bg-white m-3 p-2 rounded-xl roboto font-medium placeholder:text-gray-500 text-gray-700"
                value={description}
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="priority" className="roboto text-gray-800">Priority : </label>
              <select
                required
                type="text"
                className=" cursor-pointer outline-none text-lg  bg-white m-3 p-2 text-gray-900 roboto font-medium rounded-xl"
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                placeholder="SELECT"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex justify-end gap-5">
              <button onClick={() => seteditingTask(null)} className="bg-red-500 hover:scale-[95%] hover:bg-red-600 transition-all duration-300 text-white roboto py-1 px-2 rounded-xl text-xl">cancel</button>

              <button
                type="submit"
                className="bg-blue-400 text-white hover:scale-[95%] hover:bg-blue-500 transition-all duration-300 roboto py-1 px-2 rounded-xl text-xl"
              >
                Update
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditTask;
