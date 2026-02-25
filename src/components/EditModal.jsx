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
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10 ">
        <div
          data-dialog="modal-sm"
          className="relative m-4 p-4 gap-3 rounded-lg bg-white shadow-sm  w-1/3 min-w-[350px] max-w-1/3"
        >
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Edit Task{" "}
          </div>
          <div className="relative border-t  border-slate-200 pt-4 leading-normal text-left text-slate-600 font-light">
            <form onSubmit={handleUpdate} className="flex flex-col   gap-3">
              <div className="flex items-left flex-col gap-3 pb-3 ">
                <div className="flex  flex-col items-left">
                  <label htmlFor="title" className="roboto text-gray-800">
                    Title{" "}
                  </label>
                  <input
                    required
                    placeholder="I am empty :)"
                    className="outline-none text-xl bg-white  p-2 border-1 rounded-sm roboto font-medium placeholder:text-gray-500 text-gray-700"
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col items-left">
                  <label htmlFor="description" className="roboto text-gray-800">
                    Description{" "}
                  </label>
                  <textarea
                  rows={2}
                    type="text"
                    placeholder="add something...."
                    className="outline-none text-xl max-h-[250px] bg-white p-2 border-1 rounded-sm roboto font-medium placeholder:text-gray-500 text-gray-700"
                    value={description}
                    required
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col items-left">
                  <label htmlFor="priority" className="roboto text-gray-800">
                    Priority{" "}
                  </label>
                  <select
                    required
                    type="text"
                    className=" cursor-pointer outline-none text-lg border-1 bg-white p-2 text-gray-900 roboto font-medium rounded-sm"
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                    placeholder="SELECT"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap items-center  justify-end border-t   pt-4 border-slate-200 ">
                <button
                  onClick={() => seteditingTask(null)}
                  data-dialog-close="true"
                  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  data-dialog-close="true"
                  className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
export default EditTask;
