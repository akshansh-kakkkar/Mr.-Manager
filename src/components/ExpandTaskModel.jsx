import React, { useContext } from "react";
import { taskContext } from "../Context/CreateContext";

const ExpandTaskModel = () => {
  const { viewMore, setViewMore } = useContext(taskContext);
  if (!viewMore) return null;
  return (
    <>
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10">
         <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10 ">
        <div
          data-dialog="modal-sm"
          className="relative m-4 p-4 w-1/3 min-w-[400px] max-w-1/2 rounded-lg bg-white shadow-sm"
        >
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Title{" "}
          </div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-left text-slate-600 font-light">
            {viewMore.title}
          </div>
                    <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Description{" "}
          </div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-left text-slate-600 font-light">
            {viewMore.description}
          </div>
                    <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Priority{" "}
          </div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-left text-slate-600 font-light">
            {viewMore.priority}
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
            <button
              data-dialog-close="true"
              className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"  onClick={() => setViewMore(null)}
            >
              close
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ExpandTaskModel;

