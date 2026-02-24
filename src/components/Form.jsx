import React, { useContext, useState } from "react";
import { taskContext } from "../Context/CreateContext";
const Form = () => {
  const { dispatch } = useContext(taskContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    dispatch({
      type: "Add_Task",
      payload: {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        completed: false,
      },
    });
    setFormData({
      title: "",
      description: "",
      priority: "medium",
    });
  };

  return (
    <>
      <div className="bg-blue-50 p-3 my-2 flex justify-center rounded-xl w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto"
        >
          <input
            className="outline-none text-sm sm:text-lg bg-white p-2 text-gray-700 roboto font-medium rounded-xl placeholder:text-gray-500 flex-1 sm:flex-none"
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            placeholder="Task"
            required
          />
          <input
            className="outline-none text-sm sm:text-lg bg-white p-2 text-gray-700 roboto font-medium rounded-xl placeholder:text-gray-500 flex-1 sm:flex-none"
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
            required
            placeholder="Enter Description"
          />
          <select
            required
            type="text"
            className="cursor-pointer outline-none text-sm sm:text-lg bg-white p-2 text-gray-900 roboto font-medium rounded-xl flex-1 sm:flex-none"
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
            value={formData.priority}
            placeholder="SELECT"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button
            className="cursor-pointer outline-none bg-white px-2 py-1 transition-all hover:scale-[105%] rounded-4xl flex-shrink-0"
            type="submit"
          >
            <lord-icon
              className="translate-y-1"
              src="https://cdn.lordicon.com/vjgknpfx.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#9cc2f4,secondary:#1663c7"
              style={{ width: 24, height: 24 }}
            ></lord-icon>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
