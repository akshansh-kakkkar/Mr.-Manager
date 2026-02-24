import { useContext } from "react";
import { taskContext } from "../Context/CreateContext";
const DeleteButton = () => {
  const {
    dispatch,
    setDeleteModal,
    deleteModal,
    deleteTaskId,
    setDeleteTaskId,
  } = useContext(taskContext);
  if (!deleteModal) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10 ">
     
      <div className="bg-white rounded-xl flex-col w-80 h-60 p-3  flex ">
         <p className="text-xl roboto font-bold text-gray-700 text-left mt-8">Are You sure that you want to continue?</p>
         <div className="justify-center mt-8">
        <button
          onClick={() => {
            setDeleteModal(false);
            setDeleteTaskId(null);
          }}
          className="bg-white cursor-pointer border-2 roboto text-xl hover:bg-red-500 hover:text-white hover:scale-[102%] hover:-translate-y-1 transition-all duration-200 border-red-500 px-4 py-2 m-3 rounded-2xl text-red-500 "
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (deleteTaskId === null) return;
            dispatch({ type: "Delete_Task", payload: deleteTaskId });
            setDeleteModal(false);
            setDeleteTaskId(null);
          }}
          className="bg-red-500 px-5 roboto hover:bg-white cursor-pointer hover:text-red-500 hover:border-2 hover:border-red-500 hover:scale-[95%] transition-all duration-300 hover:-translate-y-1 text-2xl py-2 m-3 rounded-2xl text-white"
        >
          Yes
        </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
