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
   
      // <div
      //   data-dialog-backdrop="modal-md"
      //   data-dialog-backdrop-close="true"
      //   className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-1 backdrop-blur-sm transition-opacity duration-300"
      // >
         <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10 ">
        <div
          data-dialog="modal-sm"
          className="relative m-4 p-4 w-1/3 min-w-[350px] max-w-1/3 rounded-lg bg-white shadow-sm"
        >
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Delete{" "}
          </div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-left text-slate-600 font-light">
            Are You sure you want to delete this task this action is irreversible click confirm to delete.
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
            <button
              onClick={() => {
                setDeleteModal(false);
                setDeleteTaskId(null);
              }}
              data-dialog-close="true"
              className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Cancel
            </button>
            <button
              data-dialog-close="true"
              onClick={() => {
                if (deleteTaskId === null) return;
                dispatch({ type: "Delete_Task", payload: deleteTaskId });
                setDeleteModal(false);
                setDeleteTaskId(null);
              }}
              className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default DeleteButton;
