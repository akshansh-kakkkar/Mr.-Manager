import { createContext, useReducer, useState } from "react";
export const taskContext = createContext();
const intialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "Add_Task":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "Delete_Task":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "Edit_Task":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updatedData }
            : task,
        ),
        editingTask: null,
      };
    case "Toggle_Task":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, intialState);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [editingTask, seteditingTask] = useState(null);
  const [viewMore, setViewMore] = useState(null);
  return (
    <taskContext.Provider
      value={{
        state,
        dispatch,
        deleteModal,
        setDeleteModal,
        deleteTaskId,
        setDeleteTaskId,
        editModal,
        setEditModal,
        editingTask,
        seteditingTask,
        viewMore,
        setViewMore,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};
