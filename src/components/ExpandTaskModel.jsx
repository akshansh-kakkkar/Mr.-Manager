import React, { useContext } from "react";
import { taskContext } from "../Context/CreateContext";

const ExpandTaskModel = () => {
  const { viewMore, setViewMore } = useContext(taskContext);
  if (!viewMore) return null;
  return (
    <>
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10 ">
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center z-10 ">
          <div
            data-dialog="modal-sm"
            className="relative m-4 p-4  w-1/3 min-w-[350px] max-w-1/3 rounded-lg bg-white shadow-sm"
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              View Task{" "}
            </div>
            <div className="relative border-t border-slate-200 py-4 leading-normal text-left text-slate-600 font-light">
              <form>
                <div className="flex items-left flex-col gap-3">
                  <div className="flex flex-col items-left">
                    <label htmlFor="title" className="roboto text-gray-800">
                      Title {" "}
                    </label>
                    <input
                      required
                      placeholder="I am empty :)"
                      className="outline-none text-xl w-full bg-white p-2 border-1 rounded-sm roboto font-medium placeholder:text-gray-500 text-gray-700"
                      type="text"
                      value={viewMore.title}
                    />
                  </div>
                  <div className="flex flex-col items-left">
                    <label
                      htmlFor="description"
                      className="roboto text-gray-800"
                    >
                      Descrition {" "}
                    </label>
                    <textarea
                    rows={2}
                      type="text"
                      disabled
                      className="outline-none text-xl max-h-[250px] w-full bg-white  p-2 border-1 rounded-sm roboto font-medium placeholder:text-gray-500 text-gray-700"
                      value={viewMore.description}
                    />
                  </div>
                  <div className="flex flex-col items-left">
                    <label htmlFor="priority" className="roboto text-gray-800">
                      Priority {" "}
                    </label>
                    <select
                      disabled
                      type="text"
                      className=" cursor-pointer outline-none w-full text-lg border-1 bg-white  p-2 text-gray-900 roboto font-medium rounded-sm"
                      value={viewMore.priority}
                      placeholder="SELECT"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  
                </div>
              </form>
              
            </div>
<div className="flex shrink-0 flex-wrap items-center border-t pt-4 border-slate-200 justify-end">
                    <button
                      data-dialog-close="true"
                      className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                      type="button"
                      onClick={() => setViewMore(null)}
                    >
                      close
                    </button>
                  </div>
          </div>
        </div>
        ;
      </div>
      ;
    </>
  );
};

export default ExpandTaskModel;
